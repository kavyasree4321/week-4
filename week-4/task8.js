function showGreeting(languageCode)
 {
    let greeting;
    switch (languageCode) {
        case 'en':
            greeting = 'Hello!';
            break;
        case 'fr':
            greeting = 'Bonjour!';
            break;
        case 'es':
            greeting = '¡Hola!';
            break;
        case 'de':
            greeting = 'Hallo!';
            break;
        case 'it':
            greeting = 'Ciao!';
            break;
        case 'jp':
            greeting = 'こんにちは!';
            break;
        default:
            greeting = 'Language not supported.';
        }
        console.log(greeting);
    }    
            // Example usage
            showGreeting('en'); // Hello!
            showGreeting('fr'); // Bonjour!
            showGreeting('es'); // ¡Hola!
            showGreeting('de'); // Hallo!
            showGreeting('it'); // Ciao!
            showGreeting('jp'); // こんにちは!
            showGreeting('ru'); // Language not supported.;
            

