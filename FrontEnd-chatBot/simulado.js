

document.getElementById("enviar").addEventListener('click',(e)=>{
 
      const conversacion =  document.querySelector(".conversacion")
      const textarea = document.getElementById("message")
      const valor_enviado = textarea.value

      mostrar_respuesta(valor_enviado,'res-client')

      setTimeout(() => {
        document.getElementById("chatbot-estates").innerText = "Escribiendo.."

      }, 800);
      
    

        setTimeout(() => {
            
            enviar_mensaje()
        }, 2000);

       
     
     const enviar_mensaje = async () =>{


        try {
            const respuesta = await fetch('http://localhost:3000/api/chat-uvm', {

                method: "POST",
                body: JSON.stringify({
                    message: valor_enviado
                }),
                headers: {
                    "Content-type": "application/json"
                },

            })

            const data =  await respuesta.json()
             console.log(data)

             
              
                mostrar_respuesta(data[0].respuesta,'res-bot')
                document.getElementById("chatbot-estates").innerText = "en linea"
                document.getElementById('audi').play();
               
               

        } catch (error) {
            console.log(error)
        }
    }


    function mostrar_respuesta(value,clase) {
        let nuevo_message = document.createElement("p")
        nuevo_message.className = clase
        nuevo_message.innerText = value
        conversacion.appendChild(nuevo_message)
    }

       
    
})