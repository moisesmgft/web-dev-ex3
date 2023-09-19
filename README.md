# Atividade 3 - CES-26

Este documento fornece uma visão geral e explicação do código JavaScript fornecido para uma Aplicação de Árvore. O código permite gerenciar uma estrutura semelhante a uma árvore de elementos, adicionando filhos, removendo nós e modificando nomes de nós.



## Introdução

O código JavaScript fornecido complementa uma estrutura HTML e CSS para criar uma Aplicação de Árvore. Essa aplicação permite que os usuários gerenciem uma árvore hierárquica de elementos. As principais funcionalidades incluem a seleção de nós, adição de nós filhos, remoção de nós e seus filhos e modificação de nomes de nós.

## Funções

### `handleNodeSelection(node)`

Esta função lida com a seleção de nós. Ela é chamada quando um nó é clicado e remove a classe "selecionado" de qualquer nó previamente selecionado e a adiciona ao novo nó selecionado.

## Ouvintes de Eventos

### Selecionando Nós

O código inclui um ouvinte de eventos que captura cliques em itens de lista (`<li>`) dentro da visualização da árvore. Isso garante que apenas os nós que não sejam o nó raiz (indicado pela presença de um `<ul>` filho) sejam selecionáveis. O nó selecionado é destacado e a propagação de eventos para nós pai é evitada.

### Removendo a Seleção

O script escuta cliques em qualquer lugar do documento fora da visualização da árvore. Quando um clique ocorre fora da visualização da árvore, qualquer nó previamente selecionado é desmarcado (a classe "selecionado" é removida).

### Adicionando um Nó Filho

Ao clicar no botão "Adicionar Nó", o usuário é solicitado a inserir um nome para o novo nó. O código então acrescenta um novo item de lista (`<li>`) com o nome especificado ao nó selecionado. Se nenhum nó estiver selecionado, um alerta é exibido.

### Removendo um Nó

Ao clicar no botão "Remover Nó", o nó atualmente selecionado é removido, juntamente com seus filhos, se houver. Essa ação pode ser usada para excluir nós da árvore.

### Modificando o Nome do Nó

O botão "Modificar Nó" permite que os usuários alterem o nome do nó selecionado. Ele atualiza o texto do elemento `<span>` dentro do nó selecionado para o nome recém-especificado.

