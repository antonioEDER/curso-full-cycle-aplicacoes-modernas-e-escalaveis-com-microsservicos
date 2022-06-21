# curso-full-cycle-aplicacoes-modernas-e-escalaveis-com-microsservicos
Curso Full Cycle: Desenvolvimento de aplicações modernas e escaláveis com microsserviços

# Introdução
- Os microsservice são distribuição dos serviçoes em pequenas responsabilidades.
- Arquitetar, Desenvolver, Testar, Deployar, Monitorar, Suporte aos MS. (Full Cycle)
- Full Cycle Developers. Foi a NetFlix que inciou o modelo. 

# Pilares do Full Cycle
- 1 Operar o que voce constroi. (Operator What you build)
- 2 Ferramentas para escalar. (Dominar ferramentas)
- 3 Dominar ferramentas e processos para escalar. 

# O que vamos desenvolver
- Code Delivery, Criar um sistema de Delivery.
- Visualizar em tempo real do entregador.
- Enviar em tempo real do entregador.

# Ferramentas
- Elastic Search
- Apache Kafka
- Kafka Connect
- Kibana
- WebSocket *(Conexão do Browser em servidor)
- Golang *(Simulador)
- Nest.Js Back-End
- Mongo DB
- React Front-End
- Docker

# O que não vai ter no curso 
- Não trabalhar com REST
- Não persistir no Elastic Search

# Dinamica do Sistema
- Golang Simulador X Apache Kafka X Backend (Ida e volta)
- Front-End Mostra os dados
- Kafka connect X ElasticSearch X Kibana

# Sobre o Apache kafka
- Event-driven (Movido a eventos)
- Ex: Carros; Abre a porta, fecha, liga, desliga.
- Apache kafka monitora em tempo real cada evento.
- É uma plataforma, trabalha de forma distribuida.
- Tem banco de dados, e é muito rapido
- Usa o disco em vez da memoria.
- Vai além de filas
- Topic: é um Stream de dados, cada topic tem um local de armazenamento.
- Cada partição tem um numero de partições que devem ser definidas.
- Producer: Quem escreve 
- Consumer: Quem lê (Pode ser varios)

# Sobre o Kafka Cluster
- Conjunto de Brokers (Maquinas/Servidor) armazena dados em uma partição
- Cada Topic é distribuido nos Brokers
- Replication Factor (Copias das partições) se uma partição cair a outro continua o processo.

# Sobre o Kafka Connect
- É um connector, ler de uma sistema lê e joga a alteração em outro.
- Joga as informações no Mongo DB.
- Schema Registry (Valida padrao da mensagem)
- Rest Proxy
- ksqlDB (Sql de consultado do mongoDB)
- Streams

