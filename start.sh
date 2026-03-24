#!/bin/bash

# Definindo cores para as mensagens
NOCOLOR='\033[0m'
RED='\033[0;31m'
SABTRED='\033[1;31m'
GREEN='\033[1;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
SABGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
PURPLE='\033[1;31m'
SABGREEN='\033[1;32m'
YELLOW='\033[1;33m'
SABRED='\033[1;34m'
SABPURPLE='\033[1;35m'
SABTCYAN='\033[1;36m'
WHITE='\033[1;37m'

# Função para exibir mensagem colorida
print_msg() {
color=$1
msg=$2
printf "${color}${msg}${NOCOLOR}\n"
}

# Função para exibir desenho de programador
print_programmer_ascii() {
printf "${CYAN}"
clear
cat << "EOF"
Aguarde.
EOF
printf "${CYAN}\n"
}

# Função para obter o cumprimento adequado com base no horário
get_greeting() {
# Fazer uma requisição à API IP Geolocation para obter informações com base no endereço IP
local response=$(curl -s "https://api.ipgeolocation.io/timezone?apiKey=dd40a584da6c4e688a7eb4f6e7514064")

# Extrair o fuso horário da resposta
local timezone=$(echo "$response")

# Obter o horário atual no fuso horário determinado
local current_hour=$(TZ="$timezone" date +"%H")
  
# Determinar o cumprimento adequado com base no horário
if [ "$current_hour" -ge 0 ] && [ "$current_hour" -lt 12 ]; then
greeting="Bom dia"
elif [ "$current_hour" -ge 12 ] && [ "$current_hour" -lt 18 ]; then
greeting="Boa tarde"
else
greeting="Boa noite"
fi

echo "$greeting"
}

# Função para exibir o cumprimento apropriado
display_greeting() {
echo "  _    ___ ___   _    ___ __   __"
echo " | |  | __/ __| /_\  /  __\  \ / /"
echo " | |__| _| (_ |/ _ \ | (__ \ V / "
echo " |____|___\___/_/ \_\ \___| |_|  "
}

# Função para iniciar a BOT por QR Code
start_bot_qr() {
print_msg "$CYAN" "Iniciando via qr-code.\n"
print_programmer_ascii
while : 
do
printf "${CYAN}Iniciando via qr-code. \n"
node connect.js
sleep 1
printf "${CYAN}Iniciando.\n"
done
}

# Função para iniciar a BOT por código
start_bot_code() {
print_msg "$CYAN" "\nIniciando via código.\n"
print_programmer_ascii
while : 
do
printf "${CYAN}Iniciando via código.\n\n"

node connect.js sim
sleep 1
printf "${CYAN}Iniciando.\n"
done
}

# Função para apagar a pasta do QR Code
delete_qr() {
rm -rf "./arquivos/database/qr-code"
print_msg "$CYAN" "\n qr-code deletado com sucesso. \n"
}

# Função para entrar em contato com o criador da BOT (abre o WhatsApp)
comprar_arquivo() {
print_msg "$CYAN" "\n Abrindo o whatsapp \n"
termux-open-url "https://wa.me/556593065507?text=quero%20comprar%20o%20Yuri%20Bot%20v3%20quanto%20custa%20%3F"
}

install_d() {
clear
print_msg "$CYAN" "Instalando as dependências."
apt-get upgrade -y
apt-get update -y
pkg upgrade -y
pkg update -y
pkg install nodejs -y
pkg install nodejs-lts -y
pkg install ffmpeg -y
pkg install wget -y
pkg install tesseract -y
pkg install git -y
print_msg $CYAN"Tudo certo! Pode dar npm start, conectar o bot e se divertir."
}

# Menu de seleção de opções
select_option() {
print_msg "$CYAN" "\n selecione uma opção \n"
print_msg "$CYAN" "[1] Instalar dependências"
print_msg "$CYAN" "[2] Iniciar a bot por qrcode"
print_msg "$CYAN" "[3] Iniciar a bot por código"
print_msg "$CYAN" "[4] Apagar o qr-code pra gerar outro "
print_msg "$CYAN" "[5] Comprar arquivo do bot \n"

while true; do
read -p "Digite o número da opção desejada:" option
case "$option" in
 1) 
install_d
break
;;
 2) 
start_bot_qr
break
;;
 3) 
start_bot_code
break
;;
 4) 
 delete_qr
break
;;
 5) 
comprar_arquivo
break
;;
*) 
print_msg "$CYAN" "\nOpção inválida. Por favor, digite um número de 1 a 5.\n"
;;
esac
done
}

# Função principal
main() {
print_msg "$CYAN" "\nIniciando.\n"
clear
display_greeting
select_option
}

# Chamar a função principal
main