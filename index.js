// realizando as importações
import { Configuration, OpenAIApi } from 'openai'
import readline from 'readline'

// criando as configurações para o OpenAI
const configuration = new Configuration({
  organization: 'SEU IDENTIFICADOR DA ORGANIZAÇÃO',
  apiKey: 'SUA SECRET KEY'
})

// criando uma nova instância da OpenAI API
const openai = new OpenAIApi(configuration)

// testando a conexão com a OpenAI API
// openai
//   .createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: 'Hello' }]
//   })
//   .then(res => {
//     console.log(res.data.choices[0].message.content)
//   })
//   .catch(e => {
//     console.log(e)
//   })

/**
 * criando uma UI no terminal para permitir
 * que os usuários digitem seus textos
 */
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// criando o 'prompt' para o usuário
// informar a mensagem
userInterface.prompt()

// criando a rotina para fazer o envio
// das mensagems para a OpenAI API e
// exibir as respostas
userInterface.on('line', async input => {
  await openai
    .createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: input
        }
      ]
    })
    .then(res => {
      console.log(res.data.choices[0].message.content)
      userInterface.prompt()
    })
    .catch(e => {
      console.log(e)
    })
})
