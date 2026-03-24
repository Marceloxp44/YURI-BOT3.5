const BodyForm = require('form-data');
const { fromBuffer } = require('file-type');
const fetch = require('node-fetch');
const crypto = require('crypto');
const axios = require('axios');
const { ImageUploadService } = require('node-upload-images');

class Uploader {
    getRandomFilename(extension) {
        return `${Math.floor(Math.random() * 10000)}.${extension}`;
    }

    async pixhost(imageBuffer) {
        return new Promise((resolve, reject) => {
            const service = new ImageUploadService('pixhost.to');
            service.uploadFromBinary(imageBuffer, this.getRandomFilename("png"))
            .then(({ directLink }) => {
                return resolve(directLink);
            }).catch((error) => {
                return reject("Error.");
            });
        });
    }

    async catbox(content) {
        return new Promise(async (resolve, reject) => {
            const { ext, mime } = (await fromBuffer(content)) || {};
            const formData = new BodyForm();
            const randomBytes = crypto.randomBytes(6).toString("hex");

            formData.append("reqtype", "fileupload");
            formData.append('fileToUpload', content, {
                filename: "tmp" + randomBytes + '.' + ext,
                contentType: mime
            });

            const response = await fetch("https://catbox.moe/user/api.php", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": "Mozilla/5.0"
                },
            });

            if (!response.ok) {
                return reject(`Unexpected response ${response.statusText}`);
            }

            const cUrl = await response.text();
            return resolve(cUrl);
        });
    }

    async github(media) {
        try {
            const fileType = await fromBuffer(media);
            if (!fileType) {
                throw new Error('Tipo de arquivo não reconhecido.');
            }

            const fileName = `file_${Date.now()}.${fileType.ext}`;
            const fileContent = media.toString('base64');

            // 🔐 TOKEN SEGURO (NÃO EXPOR)
            const token = process.env.GITHUB_TOKEN;
            if (!token) {
                throw new Error("GITHUB_TOKEN não definido.");
            }

            const apiUrl = `https://api.github.com/repos/yuriXhiudy/up/contents/uploads/${fileName}`;

            const headers = {
                Authorization: `token ${token}`,
                'Content-Type': 'application/json',
            };

            const data = {
                message: `Upload de arquivo: ${fileName}`,
                content: fileContent,
            };

            const response = await axios.put(apiUrl, data, { headers });

            return response.data.content.download_url;

        } catch (error) {
            console.error('Erro ao fazer upload:', error.response ? error.response.data : error.message);
            throw new Error('Falha no upload para o GitHub.');
        }
    }
}

module.exports = Uploader;