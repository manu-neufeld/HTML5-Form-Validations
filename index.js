window.onload = () => {
    const form = document.querySelector('FORM')
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let display = [];

        let error = document.querySelector("#error")
        let succes= document.querySelector("#succes")
        let cardNumber = document.querySelector("#inputCard4")
        let cvc = document.querySelector("#inputCvc4")
        let amount = document.querySelector("#inputAmount")
        let name = document.querySelector("#inputName")
        let lastName = document.querySelector("#inputLastName")
        let address = document.querySelector("#inputCity")
        let state = document.querySelector("#inputState")
        let postCode = document.querySelector("#inputPostalCode")
        let message = document.querySelector("#exampleFormControlTextarea1")

        
//---------------Card Number Error------------------

            if (cardNumber.value=="" || cardNumber.value.length!=16) {
                cardNumber.classList.add('error')
                display.push(true)
            }
            else {
                cardNumber.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }
            
            if (cvc.value=="") {
                cvc.classList.add('error')
                 display.push(true)
            }
            else {
                cvc.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }
            if (amount.value=="") {
                amount.classList.add('error')
                 display.push(true)
                
            }
            else {
                amount.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }
            if (name.value=="") {
                name.classList.add('error')
                 display.push(true)
                
            }
            else {
                name.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }
            if (lastName.value=="") {
                lastName.classList.add('error')
                 display.push(true)
                
            }
            else {
                lastName.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }
            if (address.value=="") {
                address.classList.add('error')
                 display.push(true)
                
            }
            else {
                address.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }
            if (state.value=="Pick a state") {
                state.classList.add('error')
                 display.push(true)
            }
            else {
                state.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }
            if (postCode.value=="") {
                postCode.classList.add('error')
                 display.push(true)         
            }
            else {
                postCode.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }
            
            if (message.value=="") {
                message.classList.add('error')
                display.push(true)
            }
            else {
                message.classList.remove('error')
                for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                        display[index] = false
                        index=display.length
                    }
                }
            }

            for (let index=0;index<display.length;index++) {
                    if (display[index]==true) {
                       error.style.display="inline"
                        succes.style.display="none"
                        index=display.length
                    }
            }
            if (display.length==0) {
                error.style.display="none"
                succes.style.display="inline"
                console.log(error.style.display)
            }
            else {
                succes.style.display="none"
                console.log(succes.style.display)
            }

           console.log(display)
        
        
    });
}