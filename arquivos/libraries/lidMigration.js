/**
 * 🔄 SCRIPT DE MIGRAÇÃO PARA LID - Migração de Dados do Bot
 * Criado por: Hiudy (@hiudyy)
 * Baseado no guia completo de migração para LID
 */

const fs = require('fs');
const path = require('path');
const { isValidLid, isValidJid, normalizeUserId, getUserName } = require('./lidHelpers.js');

/**
 * Migra arquivo de usuários para incluir compatibilidade LID/JID
 */
async function migrateUserFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`Arquivo não encontrado: ${filePath}`);
            return false;
        }

        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        let modified = false;

        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                const user = data[i];
                if (user.id && !user.userId) {
                    const normalizedId = normalizeUserId(user.id);
                    user.userId = normalizedId;
                    user.oldJid = user.id;
                    user.userType = isValidLid(normalizedId) ? 'LID' : 'JID';
                    user.userName = user.nick || getUserName(normalizedId);
                    modified = true;
                }
            }
        }

        if (modified) {
            const backupPath = filePath + '.backup.' + Date.now();
            fs.copyFileSync(filePath, backupPath);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`✅ Migrado: ${filePath} (backup salvo em ${backupPath})`);
        }

        return true;
    } catch (error) {
        console.error(`❌ Erro ao migrar ${filePath}:`, error.message);
        return false;
    }
}

/**
 * Migra arquivos de grupo para incluir compatibilidade LID/JID
 */
async function migrateGroupFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`Arquivo não encontrado: ${filePath}`);
            return false;
        }

        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        let modified = false;

        if (Array.isArray(data) && data.length > 0) {
            const groupConfig = data[0];

            if (groupConfig.listanegra && Array.isArray(groupConfig.listanegra)) {
                const migratedList = groupConfig.listanegra.map(userId => normalizeUserId(userId) || userId);
                if (JSON.stringify(migratedList) !== JSON.stringify(groupConfig.listanegra)) {
                    groupConfig.listanegra = migratedList;
                    modified = true;
                }
            }

            if (groupConfig.advertir && Array.isArray(groupConfig.advertir)) {
                for (let warn of groupConfig.advertir) {
                    if (warn.id && !warn.userId) {
                        warn.userId = normalizeUserId(warn.id) || warn.id;
                        warn.oldJid = warn.id;
                        modified = true;
                    }
                }
            }

            if (groupConfig.allowedParticipant && groupConfig.allowedParticipant.usus) {
                const migratedAllowed = groupConfig.allowedParticipant.usus.map(userId => normalizeUserId(userId) || userId);
                if (JSON.stringify(migratedAllowed) !== JSON.stringify(groupConfig.allowedParticipant.usus)) {
                    groupConfig.allowedParticipant.usus = migratedAllowed;
                    modified = true;
                }
            }

            if (!groupConfig.lidCompatibility) {
                groupConfig.lidCompatibility = {
                    migrated: true,
                    migratedAt: new Date().toISOString(),
                    version: "1.0"
                };
                modified = true;
            }
        }

        if (modified) {
            const backupPath = filePath + '.backup.' + Date.now();
            fs.copyFileSync(filePath, backupPath);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`✅ Migrado grupo: ${filePath}`);
        }

        return true;
    } catch (error) {
        console.error(`❌ Erro ao migrar grupo ${filePath}:`, error.message);
        return false;
    }
}

/**
 * Migra todos os arquivos de usuários
 */
async function migrateAllUserFiles(usersDir = './arquivos/database/func/users') {
    console.log('🔄 Iniciando migração de arquivos de usuários...');
    try {
        const files = fs.readdirSync(usersDir).filter(file => file.endsWith('.json'));
        for (const file of files) {
            await migrateUserFile(path.join(usersDir, file));
        }
        console.log('✅ Migração de usuários concluída!');
    } catch (error) {
        console.error('❌ Erro na migração de usuários:', error.message);
    }
}

/**
 * Migra todos os arquivos de grupos
 */
async function migrateAllGroupFiles(groupsDir = './arquivos/database/groups/db') {
    console.log('🔄 Iniciando migração de arquivos de grupos...');
    try {
        const files = fs.readdirSync(groupsDir).filter(file => file.endsWith('.json'));
        for (const file of files) {
            await migrateGroupFile(path.join(groupsDir, file));
        }
        console.log('✅ Migração de grupos concluída!');
    } catch (error) {
        console.error('❌ Erro na migração de grupos:', error.message);
    }
}

/**
 * Executa migração completa do bot para LID
 */
async function runFullMigration() {
    console.log('🌟 INICIANDO MIGRAÇÃO COMPLETA PARA LID 🌟');
    console.log('Criado por Hiudy - Baseado no guia oficial\n');
    await migrateAllUserFiles();
    await migrateAllGroupFiles();
    console.log('\n🎉 MIGRAÇÃO COMPLETA FINALIZADA! 🎉');
    console.log('✅ Seu bot agora é compatível com LID');
    console.log('✅ Dados antigos foram preservados');
    console.log('✅ Backups foram criados para segurança');
    console.log('\n💡 Para testar, use o comando: .lidinfo');
}

/**
 * Verifica se uma migração é necessária
 */
function isMigrationNeeded() {
    const testFiles = [
        './arquivos/database/func/users/leveling.json',
        './arquivos/database/groups/db'
    ];
    return testFiles.some(testPath => fs.existsSync(testPath));
}

module.exports = {
    migrateUserFile,
    migrateGroupFile,
    migrateAllUserFiles,
    migrateAllGroupFiles,
    runFullMigration,
    isMigrationNeeded
};