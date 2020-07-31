
exports.message = function (req, res) {
  res.send('Reservas: Servidor em execução na porta 3000')
};

exports.post = function (req, res) {  
    console.log('Rota de criação de uma reserva.');  
    res.status(200).send({
    message: 'Reserva Criada com Sucesso',
    tipo: req.body.tipo,
    inicioEm: req.body.inicioEm,
    fimEm: req.body.fimEm,
    id: Math.random().toString(26).slice(2),
    status:'ativa',
    criadoEm: '2018-05-29T16:00:00Z'
    }); 
  };

  exports.get = function (req, res) {       
    console.log('Rota de busca de uma reserva.');  
    res.status(200).send({
    message: 'Retorno da Busca da Reserva',
     id: Math.random().toString(26).slice(2), 
     tipo: 'SAIBRO',
     status:"ativa",
     criadoEm: "2018-05-29T18:01:10Z",
     inicioEm: '2018-05-30T18:00:00Z',
     fimEm: '2018-05-30T19:00:00Z'
    });           
  };

  exports.getAll = function (req, res) {       
    console.log('Rota de busca de todas as reservas.');  
    res.status(200).send({
    message: 'Retorno de todas as Reservas',
     id: Math.random().toString(26).slice(2), 
     tipo: 'SAIBRO',
     status:"ativa",
     criadoEm: "2018-05-29T18:01:10Z",
     inicioEm: '2018-05-30T18:00:00Z',
     fimEm: '2018-05-30T19:00:00Z'})       
  };

  exports.put = function (req, res) {  
    console.log('Rota de alteração de uma reserva.');  
    res.status(200).send({
    message: 'Reserva alterada com sucesso',
    id: Math.random().toString(26).slice(2),
    tipo: req.body.tipo,    
    status:'ativa',
    criadoEm: '2018-05-29T16:00:00Z',
    inicioEm: req.body.inicioEm,
    fimEm: req.body.fimEm    
    }); 
  };
   
  exports.delete = function (req, res) {  
    console.log('Rota de exclusão de uma reserva.');  
    res.status(200).send({
    message: 'Reserva excluída com sucesso.',    
    }); 
  };