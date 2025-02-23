import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        welcome: 'Welcome',
        hero: {
            introLine1: "Your next",
            destination: "destination",
            introLine2: "is not",
            introLine3: "just a place...",
            startExperience: "it's the start of",
            experience: "your experience"
        },
        navbar: {
            home: "Home",
            team: "Team",
            faq: "FAQ",
            quiz: "Make Fynd Real",
            language: {
                en: "English (EN)",
                it: "Italiano (IT)"
            }
        },
        heroButton: {
            becomeFynder: "Become a Fynder",
            tellUs: "Make Fynd Real"
        },
        quizSection: {
            title: "Help us make FYND a reality",
            description: "There are 10 quick questions where we will ask you how interesting the idea is and what aspects to focus on.",
            buttonText: "Go to Quiz"
        },
        features: {
            title: "Forget the hours lost organizing a trip",
            item1: "Stop wasting energy organizing your holidays",
            item2: "Discover, book and experience authentic trips and experiences",
            item3: "Itineraries and experiences tailored for you, thanks to the power of AI."
        },
        email: {
            title: "Become a FYNDER",
            description: "Do you want to be one of the first FYNDERs? Subscribe to our newsletter to stay updated on the project."
        },
        cards: {
            card1: {
                mainText: "Discover what<span class='text-4xl font-bold'><br>FYNDER<br></span>you are",
                buttonText: "Fynd Yourself"
            },
            card2: {
                mainText: "<span class='text-4xl font-bold'>FYND</span><br>generates the perfect itinerary for you"
            },
            card3: {
                mainText: "When it's<br><span class='text-4xl font-bold'>FOUND</span><br>book in app"
            }
        },
        team: {
            title: "Our Team",
            subtitle: "The faces that will change the world of travel...",
            founders: {
                andrea: {
                    description: "The mind of the team, firmly holding the reins of the project"
                },
                giulio: {
                    description: "He enjoys developing, maybe a bit too much..."
                },
                marco: {
                    description: "Simplifying and optimizing are his passions, but he still has friends"
                }
            },
            collaborators: {
                giorgio: {
                    description: "The experience and competence we need"
                },
                federica: {
                    description: "As objective as she is professional"
                },
                edoardo: {
                    description: "The eyes of Fynd, 12 tenths per eye"
                }
            }
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Do you have any doubts about the project? You are in the right place...",
            questions: {
                q1: {
                    question: "How does the service work?",
                    answer: "Our service helps you organize your trip in a few clicks."
                },
                q2: {
                    question: "What are the costs?",
                    answer: "The costs vary based on the selected options. Contact us for more details."
                },
                q3: {
                    question: "Can I get a refund?",
                    answer: "Refunds are available according to our terms of service."
                },
                q4: {
                    question: "How can I contact customer support?",
                    answer: "You can contact us via email or our 24/7 chat support."
                },
                q5: {
                    question: "How long does it take to receive a booking confirmation?",
                    answer: "Usually, confirmation happens within a few minutes, but in some cases, it may take up to 24 hours."
                },
                q6: {
                    question: "Are there any special offers or discounts available?",
                    answer: "Yes, we offer group discounts and seasonal promotions. Check our offers page."
                },
                q7: {
                    question: "Can I modify or cancel my booking?",
                    answer: "Yes, you can modify or cancel your booking following the conditions specified in the confirmation."
                },
                q8: {
                    question: "How can I pay?",
                    answer: "We accept payments by credit card, PayPal, and bank transfer."
                },
                q9: {
                    question: "Are your services available worldwide?",
                    answer: "We currently operate in several destinations. Contact us to know if we cover your area."
                },
                q10: {
                    question: "What documents are required for booking?",
                    answer: "It depends on the destination and type of service. We will provide all necessary information at the time of booking."
                },
                q11: {
                    question: "Is it safe to book through your site?",
                    answer: "Yes, we use advanced security technologies to protect your data and transactions."
                },
                q12: {
                    question: "Can I gift a trip or experience?",
                    answer: "Yes, we offer customizable gift vouchers."
                }
            }
        },
        quiz: {
            title: "Help us grow",
            intro1: "Before starting, we remind you that all answers will be",
            intro2: "completely anonymous",
            intro3: "Take the necessary time to reflect, it won't take long (about 3 min).",
            intro4: "We invite you to answer sincerely, following your thoughts and preferences.",
            intro5: "There are no right or wrong answers",
            age: "How old are you?",
            frequency: "How often do you travel during the year?",
            area: "When you travel, which geographical area do you visit most frequently?",
            purpose: "Usually, why do you travel?",
            budget: "What is the average budget you have allocated for your last trips?",
            budgetSubtitle: "(Think in terms of total expenses for accommodation, transport, and activities)",
            travelAspects: "What aspects of organizing a trip do you find most challenging or least enjoyable?",
            travelAspectsSubtitle: "(Select up to 2 options)",
            travelInterests: "When you travel, what aspects or activities interest you the most?",
            travelInterestsSubtitle: "(Select up to 3 options)",
            advanceBooking: "Among the following activities and aspects of the trip, which would you be most likely to book in advance?",
            advanceBookingSubtitle: "(Select up to 4 options. If you are not interested in booking anything, leave the field empty)",
            planningApproach: "How do you usually organize to plan your trips?",
            planningApproachSubtitle: "(Select the option that best describes your approach)",
            paymentPreference: "If you used an app that generates a personalized itinerary for you, which you can modify and adapt as you prefer, and allows you to book all the activities and services of the trip in one place, which payment method would you prefer?",
            closing1: "We are",
            closing2: "FYND",
            closing3: "and our mission is to create an app that grows with you, to generate the",
            closing4: "perfect trip and allow you to book and manage everything easily and quickly, in one place",
            closing5: "If you want to become a special ",
            closing6: "FYNDER",
            closing7: " and receive exclusive benefits, leave us your email!",
            closing8: "We will contact you only when the app is ready for launch.",
            email: "Your email address",
            submit: "Submit",
            successMessage: "Thank you for completing the questionnaire! We will contact you soon.",
            errorMessage: "An error occurred. Please try again.",
            areaOptions: {
                option1: "Mainly in Italy",
                option2: "Mostly in Europe",
                option3: "Asia",
                option4: "Africa",
                option5: "America",
                option6: "Oceania",
                option7: "I don't have a specific preference",
            },
            purposeOptions: {
                option1: "Work or training",
                option2: "Holidays and leisure",
                option3: "Various events (Fairs, Concerts, ...)",
                option4: "Other",
            },
            budgetOptions: {
                option1: "Less than €250 per trip",
                option2: "€250-500",
                option3: "€500-750",
                option4: "€750-1000",
                option5: "€1000-1500",
                option6: "€1500-2000",
                option7: "Over €2000",
                option8: "I don't know",
            },
            travelAspectsOptions: {
                option1: "Comparing prices and managing bookings on multiple different platforms (flights, hotels, or transport).",
                option2: "Finding activities or experiences that reflect my interests.",
                option3: "Reconciling the travel needs of multiple people (e.g., group or family travel).",
                option4: "Informing myself about local rules and customs and managing necessary travel documents (visas, passports, insurance).",
                option5: "Discovering restaurants or finding meals that meet my dietary preferences.",
                option6: "Other...",
            },
            travelInterestsOptions: {
                option1: "Visiting cultural attractions (museums, monuments, historical sites).",
                option2: "Engaging in nature and relaxation activities (hiking, parks, beaches, spas and thermal baths).",
                option3: "Food and wine experiences (tastings, food and wine tours).",
                option4: "Attending events (festivals, concerts, sports events).",
                option5: "Discovering nightlife (bars, clubs, discos).",
                option6: "Finding the most suitable accommodation for you (hotels, B&Bs, vacation homes) and optimizing transport (flights, trains, buses).",
                option7: "Other...",
            },
            advanceBookingOptions: {
                option1: "Visits and tickets for cultural attractions (museums, monuments, historical sites).",
                option2: "Nature experiences and relaxation activities (hiking, parks, spas and thermal baths).",
                option3: "Restaurants and gastronomic experiences (meals at the table, tastings, culinary events).",
                option4: "Tickets for events (festivals, concerts, sports competitions).",
                option5: "Nightlife (clubs, discos, specialized bars).",
                option6: "Transport (flights, trains, buses, transfers).",
                option7: "Accommodation (hotels, B&Bs, vacation homes).",
                option8: "Organized tours (tour guides, themed excursions)."
            },
            planningApproachOptions: {
                option1: "I organize everything myself, booking what interests me without external support.",
                option2: "I ask friends or family to help me plan and organize the trip.",
                option3: "I rely on services or agencies that plan the trip and offer assistance in case of problems.",
                option4: "I buy ready-made travel packages/boxes.",
            },
            paymentPreferenceOptions: {
                option1: "A monthly subscription of €5 for unlimited access to the service.",
                option2: "An annual subscription of €50 (with savings compared to the monthly).",
                option3: "An additional cost of 5% on the total of each booking made through the app.",
                option4: "I would not be willing to pay anything.",
            },
        },
    },
    it: {
        welcome: 'Benvenuto',
        hero: {
            introLine1: "La prossima",
            destination: "destinazione",
            introLine2: "non",
            introLine3: "è un luogo...",
            startExperience: "è l'inizio della tua",
            experience: "esperienza"
        },
        navbar: {
            home: "Home",
            team: "Chi siamo",
            faq: "FAQ",
            quiz: "Rendi Fynd Realtà",
            language: {
                en: "English (EN)",
                it: "Italiano (IT)"
            }
        },
        heroButton: {
            becomeFynder: "Diventa un Fynder",
            tellUs: "Rendi Fynd Realtà"
        },
        quizSection: {
            title: "Aiutaci a rendere FYND realtà",
            description: "Sono 10 domande rapidissime dove ti chiederemo quanto è interessante l’idea e su quali aspetti concentrarci.",
            buttonText: "Vai al Quiz"
        },
        features: {
            title: "Dimentica le ore perse per organizzare un viaggio",
            item1: "Smettila di consumare energie per organizzare le tue vacanze",
            item2: "Scopri, prenota e vivi viaggi ed esperienze autentiche",
            item3: "Itinerari ed esperienze creati su misura per te, grazie alla potenza dell’AI."
        },
        email: {
            title: "Diventa un FYNDER",
            description: "Vuoi essere uno dei primi FYNDER? Iscriviti alla nostra newsletter per rimanere aggiornato sul progetto."
        },
        cards: {
            card1: {
                mainText: "Scopri che<span class='text-4xl font-bold'><br>FYNDER<br></span>sei",
                buttonText: "Scopriti"
            },
            card2: {
                mainText: "<span class='text-4xl font-bold'>FYND</span><br>genera l'itinerario perfetto per te"
            },
            card3: {
                mainText: "Quando è<br><span class='text-4xl font-bold'>FOUND</span><br>prenota in app"
            }
        },
        team: {
            title: "Il Nostro Team",
            subtitle: "Le facce che cambieranno il mondo dei viaggi...",
            founders: {
                andrea: {
                    description: "Mente del team, tiene con forza le redini del progetto"
                },
                giulio: {
                    description: "Si diverte a sviluppare, forse un po' troppo..."
                },
                marco: {
                    description: "Semplificare ed ottimizzare sono la sua passione, ma ha comunque degli amici"
                }
            },
            collaborators: {
                giorgio: {
                    description: "L'esperienza e la competenza di cui abbiamo bisogno"
                },
                federica: {
                    description: "Tanto oggettiva quanto professionale"
                },
                edoardo: {
                    description: "Gli occhi di Fynd, 12 decimi per occhio"
                }
            }
        },
        faq: {
            title: "Domande Frequenti",
            subtitle: "Hai qualche dubbio sul progetto? Sei nel posto giusto...",
            questions: {
                q1: {
                    question: "Come funziona il servizio?",
                    answer: "Il nostro servizio ti aiuta a organizzare il tuo viaggio in pochi click."
                },
                q2: {
                    question: "Quali sono i costi?",
                    answer: "I costi variano in base alle opzioni selezionate. Contattaci per maggiori dettagli."
                },
                q3: {
                    question: "Posso ottenere un rimborso?",
                    answer: "I rimborsi sono disponibili secondo le nostre condizioni di servizio."
                },
                q4: {
                    question: "Come posso contattare l'assistenza clienti?",
                    answer: "Puoi contattarci tramite email o il nostro supporto chat disponibile 24/7."
                },
                q5: {
                    question: "Quanto tempo ci vuole per ricevere una conferma di prenotazione?",
                    answer: "Di solito la conferma avviene entro pochi minuti, ma in alcuni casi può richiedere fino a 24 ore."
                },
                q6: {
                    question: "Ci sono offerte speciali o sconti disponibili?",
                    answer: "Sì, offriamo sconti per gruppi e promozioni stagionali. Controlla la nostra pagina delle offerte."
                },
                q7: {
                    question: "Posso modificare o cancellare la mia prenotazione?",
                    answer: "Sì, puoi modificare o cancellare la tua prenotazione seguendo le condizioni specificate nella conferma."
                },
                q8: {
                    question: "Come posso pagare?",
                    answer: "Accettiamo pagamenti con carta di credito, PayPal e bonifico bancario."
                },
                q9: {
                    question: "I vostri servizi sono disponibili in tutto il mondo?",
                    answer: "Attualmente operiamo in diverse destinazioni. Contattaci per sapere se copriamo la tua area."
                },
                q10: {
                    question: "Quali documenti sono necessari per la prenotazione?",
                    answer: "Dipende dalla destinazione e dal tipo di servizio. Ti forniremo tutte le informazioni necessarie al momento della prenotazione."
                },
                q11: {
                    question: "È sicuro prenotare tramite il vostro sito?",
                    answer: "Sì, utilizziamo tecnologie di sicurezza avanzate per proteggere i tuoi dati e transazioni."
                },
                q12: {
                    question: "Posso regalare un viaggio o un’esperienza?",
                    answer: "Sì, offriamo voucher regalo personalizzabili."
                }
            }
        },
        quiz: {
            title: "Aiutaci a crescere",
            intro1: "Prima di iniziare, ti ricordiamo che tutte le risposte saranno",
            intro2: "completamente anonime",
            intro3: "Prenditi il tempo necessario per riflettere, non richiederà molto tempo (circa 3 min).",
            intro4: "Ti invitiamo a rispondere in modo sincero, seguendo i tuoi pensieri e le tue preferenze.",
            intro5: "Non esistono risposte giuste o sbagliate",
            age: "Quanti anni hai?",
            frequency: "Quante volte ti capita di viaggiare durante l'anno?",
            area: "Quando viaggi, in quale area geografica ti sposti più frequentemente?",
            purpose: "Solitamente, per quale motivo viaggi?",
            budget: "Qual è il budget medio che hai destinato per i tuoi ultimi viaggi?",
            budgetSubtitle: "(Pensaci in termini di spese totali per alloggio, trasporti e attività)",
            travelAspects: "Quali aspetti dell’organizzare un viaggio trovi più impegnativi o meno piacevoli?",
            travelAspectsSubtitle: "(Seleziona fino a 2 opzioni)",
            travelInterests: "Quando viaggi, quali sono gli aspetti o le attività che ti interessano di più?",
            travelInterestsSubtitle: "(Seleziona fino a 3 opzioni)",
            advanceBooking: "Tra le seguenti attività e aspetti del viaggio, quali saresti più propenso/a a prenotare in anticipo?",
            advanceBookingSubtitle: "(Seleziona fino a 4 opzioni. Se non sei interessato/a a prenotare nulla, lascia il campo vuoto)",
            planningApproach: "Come ti organizzi di solito per pianificare i tuoi viaggi?",
            planningApproachSubtitle: "(Seleziona l’opzione che descrive meglio il tuo approccio)",
            paymentPreference: "Se utilizzassi un’app che genera per te un itinerario personalizzato, che puoi modificare e adattare come preferisci, e ti permette di prenotare tutte le attività e i servizi del viaggio in un unico posto, quale modalità di pagamento preferiresti?",
            closing1: "Noi siamo",
            closing2: "FYND",
            closing3: "e la nostra missione è creare un’app che cresca con te, per generarti il",
            closing4: "viaggio perfetto e permetterti di prenotare e gestire tutto in modo semplice e veloce, in un unico luogo",
            closing5: "Se vuoi diventare un ",
            closing6: "FYNDER",
            closing7: " speciale e ricevere vantaggi esclusivi, lasciaci la tua email!",
            closing8: "Ti contatteremo solo quando l’app sarà pronta per il lancio.",
            email: "Il tuo indirizzo mail",
            submit: "Conferma",
            successMessage: "Grazie per aver completato il questionario! Ti contatteremo presto.",
            errorMessage: "Si è verificato un errore. Riprova.",
            areaOptions: {
                option1: "Principalmente in Italia",
                option2: "Soprattutto in Europa",
                option3: "Asia",
                option4: "Africa",
                option5: "America",
                option6: "Oceania",
                option7: "Non ho una preferenza specifica",
            },
            purposeOptions: {
                option1: "Lavoro o formazione",
                option2: "Vacanze e svago",
                option3: "Eventi vari (Fiere, Concerti, ...)",
                option4: "Altro",
            },
            budgetOptions: {
                option1: "Meno di €250 a viaggio",
                option2: "€250-500",
                option3: "€500-750",
                option4: "€750-1000",
                option5: "€1000-1500",
                option6: "€1500-2000",
                option7: "Oltre €2000",
                option8: "Non saprei",
            },
            travelAspectsOptions: {
                option1: "Confrontare prezzi e gestire le prenotazioni su più piattaforme diverse (voli, hotel o trasporti).",
                option2: "Trovare attività o esperienze che rispecchino i miei interessi.",
                option3: "Conciliare le esigenze di viaggio di più persone (es. viaggio di gruppo o famiglia).",
                option4: "Informarmi sulle regole, le usanze locali e gestire i documenti di viaggio necessari (visti, passaporti, assicurazioni).",
                option5: "Scoprire ristoranti o trovare pasti che rispettino le mie preferenze alimentari.",
                option6: "Altro...",
            },
            travelInterestsOptions: {
                option1: "Visitare attrazioni culturali (musei, monumenti, siti storici).",
                option2: "Dedicarti alla natura e al relax (escursioni, parchi, spiagge, spa e terme).",
                option3: "Esperienze enogastronomiche (degustazioni, tour enogastronomici).",
                option4: "Partecipare a eventi (festival, concerti, eventi sportivi).",
                option5: "Scoprire la vita notturna (bar, club, discoteche).",
                option6: "Trovare l'alloggio più adatto a te (hotel, B&B, case vacanza) e ottimizzare i trasporti (voli, treni, autobus).",
                option7: "Altro...",
            },
            advanceBookingOptions: {
                option1: "Visite e biglietti per le attrazioni culturali (musei, monumenti, siti storici).",
                option2: "Esperienze nella natura e attività di relax (escursioni, parchi, spa e terme).",
                option3: "Ristoranti ed esperienze gastronomiche (pranzi e cene al tavolo, degustazioni, eventi culinari).",
                option4: "Biglietti per eventi (festival, concerti, competizione sportiva).",
                option5: "Vita notturna (club, discoteche, bar specializzati).",
                option6: "Trasporti (voli, treni, autobus, transfer).",
                option7: "Alloggi (hotel, B&B, case vacanza).",
                option8: "Tour organizzati (guide turistiche, escursioni a tema)."
            },
            planningApproachOptions: {
                option1: "Organizzo tutto da solo/a, prenotando ciò che mi interessa senza supporto esterno.",
                option2: "Chiedo ad amici o parenti di aiutarmi a pianificare e organizzare il viaggio.",
                option3: "Mi affido a servizi o agenzie che pianificano il viaggio e offrono assistenza in caso di problemi.",
                option4: "Acquisto pacchetti/box per viaggio già pronti.",
            },
            paymentPreferenceOptions: {
                option1: "Un abbonamento mensile di €5 per avere accesso illimitato al servizio.",
                option2: "Un abbonamento annuale di €50 (con un risparmio rispetto al mensile).",
                option3: "Un costo aggiuntivo del 5% sul totale di ogni prenotazione effettuata tramite l’app.",
                option4: "Non sarei disposto/a a pagare nulla.",
            },
        },
    },
};

const i18n = createI18n({
    locale: ['it', 'en'].includes(navigator.language.split('-')[0])
        ? navigator.language.split('-')[0]
        : 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
