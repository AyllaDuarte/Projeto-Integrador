const express = require("express");
const router = express.Router();
const views = require("../controller/ControllerView");
const form = require("../controller/ControllerForm");

router.get("/", views.home);

router.get("/finalizarCompra", views.finalizarCompra);

router.get("/realizePedido", views.realizePedido);
router.post("/realizePedido", form.realizePedido);

router.get("/sejaFranqueado", views.sejaFranqueado);

router.post("/sejaFranqueado", form.sejaFranqueado);

router.get("/cadastroProduto", views.cadastroProduto);

router.get("/meu-pedido/:id", views.meuPedidoView);

router.get("/pedido-realizado/:id", views.pedRealizadoView);

router.get("/admin/ordem-do-pedido/:id", views.admOrderView);

router.post("/admin/criar-produto", form.admCreate);

router.get("/cardapio", views.cardapioView); //sem css

router.get("/cadastroUsuario", views.cadastroUsuario);

router.post("/cadastroUsuario/cadastrarUsuario",form.cadastrarUsuario);

router.get('/acessoUsuario', views.acessoUsuario);

router.get('/feedback', views.feedback);

router.post('/feedback/avaliacao' , form.feedbackAvaliacao);

router.get('/consultaOrdemPedido', views.consultaOrdemPedido) 

router.get('/recuperarSenha', views.recuperarSenha) 

router.get('/statusPedido', views.statusPedido) 

router.get('/pagamentoCredito', views.pagamentoCredito) //falta css

router.post('/pagamentoCredito', form.finalizarcompraCredito);

router.get('/pagamentodebito', views.pagamentoDebito); //falta css

router.post('/pagamentodebito', form.finalizarcompraDebito);

router.get('/pagamentopix', views.pagamentopix); //falta css

router.get('/produtosLista', views.produtosLista);

module.exports = router
