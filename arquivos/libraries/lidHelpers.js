/**
 * 🛡️ FUNÇÕES AUXILIARES PARA LID - Sistema de Compatibilidade LID/JID
 * Criado por: Hiudy (@hiudyy)
 * Baseado no guia completo de migração para LID
 * Compatível com: @cognima/walib e versões modernas do Baileys
 */

const fs = require('fs');

// ====================================
// 🔍 FUNÇÕES DE VALIDAÇÃO
// ====================================

const isGroupId = (id) => {
    if (!id || typeof id !== 'string') return false;
    if (id.endsWith('@g.us')) return true;
    const groupPattern = /^\d{10,20}@g\.us$/;
    return groupPattern.test(id);
};

const isUserId = (id) => {
    return id && typeof id === 'string' && (id.includes('@lid') || id.includes('@s.whatsapp.net'));
};

const isValidLid = (str) => /^[a-zA-Z0-9_]+@lid$/.test(str);

const isValidJid = (str) => /^\d+@s\.whatsapp\.net$/.test(str);

// ====================================
// 📝 FUNÇÕES DE PROCESSAMENTO
// ====================================

const getUserName = (userId) => {
    if (!userId || typeof userId !== 'string') return 'Desconhecido';
    if (userId.includes('@lid') || userId.includes('@s.whatsapp.net')) return userId.split('@')[0] || userId;
    return userId.split('@')[0] || userId;
};

const normalizeUserId = (userId) => {
    if (!userId || typeof userId !== 'string') return null;
    const cleaned = userId.trim();
    if (/^\d+$/.test(cleaned)) return cleaned + '@s.whatsapp.net';
    if (isValidLid(cleaned) || isValidJid(cleaned)) return cleaned;
    const numberMatch = cleaned.match(/\d{10,15}/);
    if (numberMatch) return numberMatch[0] + '@s.whatsapp.net';
    return cleaned;
};

// ====================================
// 🔄 FUNÇÕES DE CONVERSÃO
// ====================================

const getLidFromJid = async (socket, jid) => {
    if (!isValidJid(jid)) return jid;
    try {
        const result = await socket.onWhatsApp(jid);
        if (result && result[0] && result[0].lid) return result[0].lid;
    } catch (error) {
        console.warn(`Erro ao obter LID para ${jid}: ${error.message}`);
    }
    return jid;
};

const buildUserId = (numberString, config) => {
    if (config.lidowner && numberString === config.numerodono) return config.lidowner;
    const cleanNumber = numberString.replace(/[^\d]/g, '');
    return cleanNumber + '@s.whatsapp.net';
};

const getBotId = (socket) => {
    const botId = socket.user.id.split(':')[0];
    return botId.includes('@lid') ? botId : botId + '@s.whatsapp.net';
};

// ====================================
// 🛡️ FUNÇÕES DE PERMISSÕES
// ====================================

const isBotOwner = (userId, config) => {
    const ownerJid = `${config.numerodono}@s.whatsapp.net`;
    const ownerLid = config.lidowner;
    return userId === ownerJid || (ownerLid && userId === ownerLid) || userId === config.numerodono;
};

async function isGroupAdmin(socket, groupId, userId) {
    try {
        const groupMetadata = await socket.groupMetadata(groupId);
        const participant = groupMetadata.participants.find(p => p.id === userId);
        return participant && (participant.admin === 'admin' || participant.admin === 'superadmin');
    } catch (error) {
        console.warn(`Erro ao verificar admin: ${error.message}`);
        return false;
    }
}

const isUserInList = (userId, userList) => {
    if (!userId || !Array.isArray(userList)) return false;
    const normalizedUserId = normalizeUserId(userId);
    if (!normalizedUserId) return false;
    return userList.some(listId => normalizeUserId(listId) === normalizedUserId);
};

// ====================================
// 🔧 FUNÇÕES DE CONFIGURAÇÃO
// ====================================

async function updateOwnerLid(socket, config) {
    if (!config.numerodono) {
        console.warn('Número do dono não configurado');
        return null;
    }
    try {
        const ownerJid = `${config.numerodono}@s.whatsapp.net`;
        const result = await socket.onWhatsApp(ownerJid);
        if (result[0]?.lid) {
            console.log('✅ LID do dono atualizado:', result[0].lid);
            return result[0].lid;
        } else {
            console.log('⚠️ LID do dono não disponível, mantendo JID');
            return null;
        }
    } catch (error) {
        console.log('⚠️ Não foi possível obter LID do dono:', error.message);
        return null;
    }
}

// ====================================
// 📞 FUNÇÕES DE MENÇÕES
// ====================================

function extractMentions(message) {
    const mentions = [];
    const messageText = message.text || message.caption || '';
    const mentionRegex = /@(\d{10,15})/g;
    let match;
    while ((match = mentionRegex.exec(messageText)) !== null) {
        mentions.push(`${match[1]}@s.whatsapp.net`);
    }
    if (message.contextInfo?.mentionedJid) mentions.push(...message.contextInfo.mentionedJid);
    return [...new Set(mentions)].map(id => normalizeUserId(id)).filter(Boolean);
}

async function convertMentionsToLid(socket, mentions) {
    const convertedMentions = [];
    for (const mention of mentions) {
        try {
            if (isValidJid(mention)) {
                const result = await socket.onWhatsApp(mention);
                convertedMentions.push(result[0]?.lid || mention);
            } else {
                convertedMentions.push(mention);
            }
        } catch {
            convertedMentions.push(mention);
        }
    }
    return convertedMentions;
}

// ====================================
// 📊 EXPORTAÇÕES
// ====================================

module.exports = {
    isGroupId,
    isUserId,
    isValidLid,
    isValidJid,
    getUserName,
    normalizeUserId,
    getLidFromJid,
    buildUserId,
    getBotId,
    isBotOwner,
    isGroupAdmin,
    isUserInList,
    updateOwnerLid,
    extractMentions,
    convertMentionsToLid
};