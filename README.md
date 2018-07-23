# React Nativel Places

# Sobre o Projeto

O objetivo deste projeto era desenvolver um app para compartilhar locais onde o usuário tira uma foto de algum local e o app armazena a localização desse local. Dessa forma cria pontos em um mapa, listando esses locais com as suas imagens.
Abaixo você pode encontrar algumas informações importantes para executar projetos utilizando React Native, 


# Configurando Emulador Android

- Para inicio de qualquer coisa, você precisa ter o Java JDK v1.8(ou uma versão mais recente) instalado.

## Instalando OpenJDK Java no Ubuntu e seus derivados via PPA
- OpenJDK está disponível nos repositórios oficiais das versões mais recentes do Ubuntu e pode ser instalado usando a Central de programas ou usando o comando
    
    sudo apt-get install openjdk-8-jdk.

Mas se a sua versão do ubuntu não disponibilizar, ou você quer a versão mais recente, para instalar o programa no Ubuntu e ainda poder receber automaticamente as futuras atualizações dele, você deve fazer o seguinte:

1. Abra um terminal (no Unity use as teclas CTRL + ALT + T);
2. Se ainda não tiver, adicione o repositório do programa com o comando abaixo;

        sudo add-apt-repository ppa:openjdk-r/ppa

3. Atualize o gerenciador de pacotes com o comando:

        sudo apt-get update

4. Agora use o comando abaixo para instalar o programa;

        sudo apt-get install openjdk-8-jdk

5. Se você tiver mais de uma versão do Java instalado em seu sistema, execute o comando abaixo para definir o interpretador Java padrão:

        sudo update-alternatives --config java

6. Na tela que aparece, escolha e digite um número para selecionar uma versão do Java e depois tecle enter;

7. Para definir o compilador Java padrão, executando o comando a seguir:

        sudo update-alternatives --config javac

8. Finalmente confira qual é a versão Java atual, executando:

        java -version

Pronto! Agora você já está com a última versão do Java no Ubuntu.


### Desinstalando o OpenJDK Java no Ubuntu e derivados

Para desinstalar o OpenJDK Java no Ubuntu e derivados, faça o seguinte:

1. Abra um terminal;
2. Desinstale o OpenJDK Java, usando os comandos abaixo;

        sudo apt-get remove openjdk-8-jdk -y
        sudo apt-get autoremove


- Antes de instalarmos o Android Studio, vamos configurar o Android SDK, ele será necessário para podermos utilizar o emulador.

## Configurando Android SDK

- copie a pasta android-sdk, para `/home/seu_nome_de_usuário/Documentos/`
- edite o arquivo .bashrc:

        sudo gedit ~/.bashrc

- adicione as seguintes linhas ao final do arquivo

        # Android SDK
        export ANDROID_HOME=$HOME/Documentos/android-sdk
        export PATH=$PATH:$ANDROID_HOME/tools
        export PATH=$PATH:$ANDROID_HOME/platform-tools

- pronto, agora para verificar se está tudo ok, execute:

        adb --version

- se o comando foi reconhecido, você pode prosseguir para o próximo passo.

## Instalando o Android Studio

1 - Baixe o Android Studio: 

    https://developer.android.com/studio/?hl=pt-br

- Após baixar e descompactar o arquivo, você verá a pasta `android-studio`, mova essa pasta para o caminho `/usr/local/`

2 - Executar o intalador do Android Studio:

    sh /usr/local/android-studio/bin/studio.sh

3 - Agora é só seguir os passos do intalador:
    - No tipo de instalação selecione `custom`, para verificar se o Android Studio irá encontrar o caminho do SDK, se ele não encontrar você pode setar o caminho, isso evitará que ele faça download de todas as configurações do SDK. OBS: Caso alguma biblioteca do SDK, foi atualizada, ou descontinuada e existe uma nova, ele fará o download automaticamente.

4 - Após a instalação, acesse o menu `tools > Android avd`, crie um novo dispositivo com a versão mais recente do android, e inicie o dispositivo.

## Instruções de instalação do Projeto

- Execute os comandos:

        git clone https://github.com/JulioCesarCeron/react-native-places.git
        npm install

- Após clonar o projeto é necessário setar um numero para que processos consigam monitorar arquivos, esse passo é necessário para permitir que o react faça o Hot Reload da aplicação.

        sudo sysctl -w fs.inotify.max_user_instances=1024
        sudo sysctl -w fs.inotify.max_user_watches=12288

- Comando a seguir gera o bundler da aplicação, para que o app consiga acessar os arquivos.

        npm run start

- OBS: normalmente podem ocorrer problemas ao executar esse comando se você estiver usando o ubuntu, para isso tente parar os processos que estão usando a porta padrão que é utilizada pelo Metro Bundler, para isso execute o seguinte comando para verificar quais processos estão usando a porta padrão (`8081`) do Metro Bundler;

      lsof -i :8081

- Caso existir algum processo ouvindo essa porta, ele será exibido, então verifique qual é o seu `PID` e use `sudo kill PID` para fechar o processo, após isso, tente executar `npm run start` novamente.  


- Instale o app no emulador, abra outro terminal e execute:

        npm run android

- Tudo pronto, sua aplicação está sendo executada no emulador, para habilitar o hot reload, dentro do emulador pressione `CTRL + m`, será exibido algumas opções, selecione `Enable Live Reload` e `Enable Hot Reloading`.
- Você pode forçar a atualização do emulador pressionando `CTRL + m` e selecionando `Reload`


## Opçoes para Debug

Você pode utilizar o `React Native Debugger`, ele pode ser baixado neste link: https://github.com/jhen0409/react-native-debugger/releases
Basta baixar e executá-lo, depois acesse o emulador pressione `CTRL + m` e selecione `Debug JS Remotely`


