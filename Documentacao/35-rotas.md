# Rotas 

Um parte do conteúdo é sempre fixa e a outra da aplicação muda conforme a navegação  do usuário.

<img src="https://i.ibb.co/pZW839M/35-rotas-01.jpg">

Para demarcamos essa nossa área como um componente dinâmico, precisamos demarcar com o componente 

<router-outlet></router-outlet>

<img src="https://i.ibb.co/1dLj42V/35-rotas-02.jpg">

As rotas ela mapeam os caminhos para cada tipo de componente

Precisamos indicar através do uso da função forRoot(ROUTES) no modulo raiz o 'Module"

<img src="https://i.ibb.co/k0yxZfy/35-rotas-03.jpg">

> Como que os caminhos são acionados? 

O modo de rotiamento disponibiliza uma diretiva chamada de 'routerLink', onde podemos passar um caminho a ser acinado ou um conjunto de parametros, pode utilizar das duas maneiras como no exemplo a seguir: 

<img src="https://i.ibb.co/5KrFd3T/35-rotas-04.jpg">


# Criando as primeiras rotas

Precisamos criar um aruivo.routes.ts, neste arquivo precisamos criar a nossa const ROUTES, depois criamos o nosso array com as rotas

<img src="https://i.ibb.co/RpXpRTt/36-rotas-004.png">

No modules precisamos importa a const ROUTE, se estivemos no nosso modulo raiz precisamos utilzar 
o método .forRoot(ROUTES) e podemos passar nosso array de rotas no caso o ROUTES, se estivemos em outro modulo utilizamos o método 'forChild'

<img src="https://i.ibb.co/HFMqF8q/36-rotas-005.png">
