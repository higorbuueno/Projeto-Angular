-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Jun-2022 às 21:58
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fundamentosweb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcoes`
--

CREATE TABLE `funcoes` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `funcoes`
--

INSERT INTO `funcoes` (`id`, `nome`) VALUES
(1, 'Gerente'),
(2, 'Jornalista'),
(3, 'Freelancer');

-- --------------------------------------------------------

--
-- Estrutura da tabela `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `marcas`
--

INSERT INTO `marcas` (`id`, `nome`) VALUES
(1, 'Computador'),
(2, 'Sony'),
(3, 'Microsoft'),
(4, 'Nintendo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `texto` varchar(800) DEFAULT NULL,
  `imagem` longblob DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `plataforma` int(11) DEFAULT NULL,
  `modificacao` datetime DEFAULT NULL,
  `criacao` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `texto`, `imagem`, `tipo`, `plataforma`, `modificacao`, `criacao`) VALUES
(1, 'Site de cara nova', 'Olá meus amigos e amigas!\nEstamos de cara nova, espero que gostem! O site está passando por algumas mudanças para deixar-lo bom para vocês principalmente mas também como o gerenciamos. Espero que gostem e caso tenham alguma ideia ou algo que não gostarem, entre em contato conosco pela nossas redes socias!!!', 0x6e756c6c, 3, 1, '2022-06-18 15:22:16', '2022-06-12 23:29:30'),
(2, 'Summer Games é um sucesso', 'Summer Games mostrou ser um grande sucesso com o publico pois não tivemos a grande e famosa E3 esse ano mas também com as empresas que gostaram tanto da visibilidade e de ter que gastar menos para apresentar os atuais e futuros projetos. O grande destaque que tivemos será do pc que recebera vários jogos nesse e próximo ano.', 0x6e756c6c, 1, 1, '2022-06-18 15:28:43', '2022-06-13 01:43:20'),
(3, 'Nova Plus será um sucesso?', 'A Sony anunciou as mudanças que a Plus passara por boas mudanças e funcionara quase como o Game Pass da Microsoft. A noticia dividiu o pessoal que gostaram e odiaram a ideia, até por que o valor será diferente também. Será que a nova Plus terá todos os beneficios que o Game Pass tem? Vira para o pc no futuro? Saberemos nos proximos capitulos.', 0x756e646566696e6564, 1, 2, '2022-06-18 15:42:33', '2022-06-12 23:18:30'),
(4, 'The Quarry', 'Jogo muito caro pelo promete, não vale a pena por enquanto.', 0x756e646566696e6564, 4, 1, '2022-06-18 16:47:31', '2022-06-12 23:18:32'),
(5, 'Nitendo Switch novo update', 'Novo update adiciona o Discord e resolve a maioria dos bugs', 0x756e646566696e6564, 2, 3, '2022-06-18 16:48:50', '2022-06-12 23:18:32'),
(9, 'Novos controles para PS4', 'Hoje foi finalmente lançado os novos controles do PS4, eles trazem novas cores e os novos analógicos que foram refeitos. O review deles está em nosso site.', 0x756e646566696e6564, 3, 2, '2022-06-18 16:53:25', '2022-06-13 01:43:35'),
(10, 'Novo controle PS4', 'A grande promessa de melhorar os analógicos foi cumprida mas o valor é o problema. Em uma promoção será uma ótima aquisição.', 0x756e646566696e6564, 4, 2, '2022-06-18 16:58:51', '2022-06-14 12:33:56'),
(13, 'Novo Mario', 'Mais um Mario vem ai com e todos os adeptos a Nintendo amaram a notícia, o trailer mostrou pouco mas os gráficos estão ok e gameplay aparentemente é quase igual ao anterior. Ele chega ainda esse ano e a pré venda ja está disponível.', 0x756e646566696e6564, 3, 3, '2022-06-18 17:04:36', '2022-06-15 23:29:30'),
(14, 'Wario Lands 7', 'O novo jogo pegou todos de supresa e pois ninguem espera que seria tão bom. Vale cada centavo em uma promoção, 450 reais é uma loucura.', 0x756e646566696e6564, 4, 3, '2022-06-18 17:27:10', '2022-06-16 23:29:30'),
(15, 'Review The Quarry', 'Review ja disponível em nosso site.', 0x756e646566696e6564, 2, 2, '2022-06-18 17:07:20', '2022-06-16 23:29:30'),
(16, 'Review Wario Lands 7', 'Review ja disponível em nosso site.', 0x756e646566696e6564, 2, 3, '2022-06-19 16:41:21', '2022-06-15 23:29:30'),
(18, 'Sony acerta em trazer exclusivos ao PC?', 'Os jogos do Homem Aranha e o primeiro The Last of Us será lançado para Pc e foi mais um acerto da Sony. Por mais que os fãs do Playstation fiquem bravos e os do Pc felizes, a Sony está vendendo jogos antigos a preço de lançamento e capitando dinheiro para continuação dos jogos, demorou mas a Sony viu a mina de ouro que é o Pc.', 0x6e756c6c, 1, 1, '2022-06-18 17:11:12', '2022-06-17 23:29:30'),
(19, 'Madden 2023', 'Igual ao 2022 só o layout está diferente e é 500 reais...', NULL, 4, 2, '2022-06-18 18:10:30', '2022-06-13 12:33:30'),
(20, 'Todo dia um artigo', 'Agora todo dia teremos um artigo interessante para você.', NULL, 2, 3, '2022-06-18 17:23:01', '2022-06-14 12:33:56'),
(21, 'Review novos controles PS4', 'Review dos novos controles do PS4 ja disponível.', NULL, 2, 2, NULL, '2022-06-18 17:13:54'),
(22, 'Novas RTX e RX chegando!!!', 'As novas placas de vídeo da Nvidia e AMD as RTX e RX respectivamente estão perto de lançar. As duas empresas ja anunciaram quais tecnologias irão utilizar e a expectativa é que elas cheguem até outubro deste ano.', NULL, 3, 1, NULL, '2022-06-18 17:17:20'),
(23, 'Futuro dos games será Stream?', 'Com a qualidade e velocidade da internet melhorando será que poderemos desfurtar dos jogos sem precisar de um console ou computador? A resposta é sim e não, a internet vem melhorando mas a maioria da população não tem acesso a ela por diversos motivos e a tecnologia ainda tem alguns problemas. Num futuro bem bem distante tem certeza que sim.', NULL, 1, 1, NULL, '2022-06-18 17:20:59'),
(24, 'Preço dos jogos', 'Está cada vez mais caro ser um apreciador de games principalmente se você tiver algum console da Nintendo, ela literalmente não liga para o consumidor brasileiro, o novo Wario Lands 7 por exemplo sai por 450 reais, é um absurdo independente de quantas horas de jogo ele lhe oferece mas certamente muitas pessoas irá comprar sem pensar duas vezes.', NULL, 1, 3, NULL, '2022-06-18 17:26:37'),
(25, 'Novo Guitar Hero', 'Supreendendo a todos, um novo Guitar Hero foi anunciado e estamos extremamente esperançosos e esperamos que tenha a qualidade dos primeiros games. Não há data de lançamento mas é esperado para o verão americano de 2023.', NULL, 3, 1, NULL, '2022-06-18 17:33:49'),
(26, 'Novo Guitar Hero', 'Anunciaram novo Guitar Hero.', NULL, 2, 1, '2022-06-19 16:39:36', '2022-06-18 17:34:21'),
(27, 'Nintendo anuncia no Mario', 'Mais um Mario vem ai...', NULL, 2, 1, NULL, '2022-06-18 17:34:52'),
(28, 'Jogos anuais matam as franquias', 'Os lançamentos anuais estão matando as franquias e após a compra da Activision/Blizard pela Microsoft, ela anuncio que as franquias deixaram de ser anuais para ter mais qualidade. Concordo totalmente com a ela e é uma dica para a EA, Ubsoft, Konami e outras que lançam a mesma coisa com graficos pouco melhores e conteudo pobre mas preça cheio né.', NULL, 1, 2, NULL, '2022-06-18 17:38:23'),
(29, 'Estamos contrando', 'Temos novas vagas para Jornalista e Freelancer, caso esteja interessado entre em contato conosco em nossas redes sociais. Venha fazer parte do nosso time!', NULL, 3, 1, NULL, '2022-06-18 17:40:15'),
(30, 'FIFA 2023', 'Basicamente a cor do gramado, layout e atualizaram os elencos. Tirando essas coisa é igual ao 2022. ', NULL, 4, 1, NULL, '2022-06-18 17:43:39'),
(31, 'Indies são melhores que os Triple A', 'Existem vários jogos indies que são sem sombra de duvidas melhores que muitos Triple A mas por que? A resposta é simples, os indies trazem o que os players pedem que são jogos realmente novos e não \"requentados\", preço justo e sem microtransação. A Devolver Digital é um grande exemplo com ótimos jogos e preço justo.', NULL, 1, 1, NULL, '2022-06-18 17:48:14'),
(32, 'Silksong sai em 2023', 'Não temos uma data exata mas só de saber que será no ano que vem e estará disponível no Game Pass no day one, ja é uma grande notícia. A expectativa é alta até pela qualidade do Hollow Knight e o valor será justo até por que a Cherry Games ja provou que da para fazer jogos aclamados por todos em um preço justo e todos ficam felizes.', NULL, 3, 1, NULL, '2022-06-18 17:52:44'),
(33, 'Estamos cansados de microtransação', 'Realmente estamos cansados de comprar um jogo e ser coagido a comprar mais coisas dentro dele, alguns jogos ainda barram sua progressão para você realmente comprar algo e/ou ter vantegens. Não adianta reclamar e continuar comprando viu pessoal, temos que nos juntar, reclamar e não comprar, as empresas só ouvem o consumidor quando levam prejuizo.', NULL, 1, 1, NULL, '2022-06-18 17:57:49'),
(34, 'Nintendo perto de anunciar novo console', 'Rumores apontam que a Nintendo está perto de anunciar um novo console. Ele seguirá a mesma linha do Nintendo Switch mas será mais difícil de desbloquear e emula-lo no Pc. Aqui no Brasil a Nintendo tem muitos fãs mas vende pouco pois cobra muito caro no console e jogos. Eles não estão nem ai para nós e deveriamos fazer o mesmo.', NULL, 3, 3, NULL, '2022-06-18 18:01:25'),
(35, 'Jogos estão cada vez mais caros', 'Está cada vez mais complicado ser gamer, os jogos estão cada vez mais caros inclusive os digitais, alguns chegam a ser o mesmo valor do fisico que não tem nenhum cabimento. Há jogos sendo lançados por 450 reais e as empresas culpam o dolar e os impostos, mas enquanto empresas indies lançar jogos a 60 reais, não acreditarei neste discurso.', NULL, 1, 1, NULL, '2022-06-18 18:04:26'),
(36, 'Nova atulização PS4 ', 'Nova atulização trás correção de bugs.', NULL, 2, 2, NULL, '2022-06-18 18:06:20'),
(37, 'Review Madden 2023', 'Review ja disponível.', NULL, 2, 2, NULL, '2022-06-18 18:09:50'),
(38, 'EA Games ri da nossa cara', 'A EA Games acaba de lançar novo Madden e FIFA e os dois vem com preço sugerido de 500 reais. O pior disso é saber que o valor do jogo praticamente igual ao do ano anterior vale quase 1/3 do salário mínimo e irá bater records de venda. As empresas como a EA Games ri da nossa cara e alguns ainda se vestem de palhaço para ela.', NULL, 1, 2, NULL, '2022-06-18 18:13:11'),
(39, 'Artigos novos todos os dias', 'Agora temos um artigo por dia.', NULL, 2, 1, NULL, '2022-06-18 18:14:41'),
(40, 'Hollow Knight', 'Essa bela obra prima a 35 reais, dlcs grátis e mais de 80 horas de gameplay. Vale cada centavo com toda a certeza.', NULL, 4, 3, NULL, '2022-06-18 18:16:30'),
(41, 'Review Hollow Knight', 'Ja disponivel a review em nosso site.', NULL, 2, 3, NULL, '2022-06-18 18:17:00'),
(42, 'Lançamento novos Ryzen', 'Novos Ryzem lançam amanhã, review amanhã em nosso site.', NULL, 2, 1, NULL, '2022-06-18 18:17:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pizzas`
--

CREATE TABLE `pizzas` (
  `id` int(6) UNSIGNED NOT NULL,
  `sabor` varchar(30) NOT NULL,
  `valor` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pizzas`
--

INSERT INTO `pizzas` (`id`, `sabor`, `valor`) VALUES
(1, 'Sabor Da Casa', 56.99),
(2, 'Hortolandia', NULL),
(3, 'Pepperoni', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `plataformas`
--

CREATE TABLE `plataformas` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `marca` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `plataformas`
--

INSERT INTO `plataformas` (`id`, `nome`, `tipo`, `marca`) VALUES
(1, 'Computador', 1, 1),
(2, 'Playstation 4', 2, 2),
(3, 'Nintendo Switch', 3, 4),
(4, 'Xbox', 2, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `setores`
--

CREATE TABLE `setores` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `setores`
--

INSERT INTO `setores` (`id`, `nome`) VALUES
(1, 'Administrativo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_noticias`
--

CREATE TABLE `tipo_noticias` (
  `id` int(11) NOT NULL,
  `descricao` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipo_noticias`
--

INSERT INTO `tipo_noticias` (`id`, `descricao`) VALUES
(1, 'Artigo'),
(2, 'Card'),
(3, 'Noticia'),
(4, 'Review');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_plataformas`
--

CREATE TABLE `tipo_plataformas` (
  `id` int(11) NOT NULL,
  `descricao` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipo_plataformas`
--

INSERT INTO `tipo_plataformas` (`id`, `descricao`) VALUES
(1, 'Computador'),
(2, 'Console'),
(3, 'Console Portátil');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `funcao` int(11) DEFAULT NULL,
  `senha` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `funcao`, `senha`) VALUES
(1, 'Higor', 1, 'HIGOR'),
(2, 'Mario', 2, '123'),
(3, 'Marcus', 2, '123'),
(4, 'Josias', 3, '123'),
(6, 'William', 3, '123'),
(7, 'Dierison', 2, 'Dierison');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `funcoes`
--
ALTER TABLE `funcoes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `noticias_FK` (`tipo`),
  ADD KEY `noticias_FK_1` (`plataforma`);

--
-- Índices para tabela `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plataformas_FK` (`tipo`),
  ADD KEY `plataformas_FK_1` (`marca`);

--
-- Índices para tabela `setores`
--
ALTER TABLE `setores`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipo_noticias`
--
ALTER TABLE `tipo_noticias`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipo_plataformas`
--
ALTER TABLE `tipo_plataformas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_FuncaoUsuario` (`funcao`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `funcoes`
--
ALTER TABLE `funcoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de tabela `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `plataformas`
--
ALTER TABLE `plataformas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `setores`
--
ALTER TABLE `setores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tipo_noticias`
--
ALTER TABLE `tipo_noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tipo_plataformas`
--
ALTER TABLE `tipo_plataformas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `noticias_FK` FOREIGN KEY (`tipo`) REFERENCES `tipo_noticias` (`id`),
  ADD CONSTRAINT `noticias_FK_1` FOREIGN KEY (`plataforma`) REFERENCES `plataformas` (`id`);

--
-- Limitadores para a tabela `plataformas`
--
ALTER TABLE `plataformas`
  ADD CONSTRAINT `plataformas_FK` FOREIGN KEY (`tipo`) REFERENCES `tipo_plataformas` (`id`),
  ADD CONSTRAINT `plataformas_FK_1` FOREIGN KEY (`marca`) REFERENCES `marcas` (`id`);

--
-- Limitadores para a tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FK_FuncaoUsuario` FOREIGN KEY (`funcao`) REFERENCES `funcoes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
