module.exports = {
    name: "joke",
    description: "Sends a random joke",
    aliases: ['barzelletta', 'battuta'],
    async execute (client, message, args){
      var battute = [
        '**Figlia**: Papà, papà, mi sono fidanzata con un ragazzo; lavora come meccanico. \n\n**Papà**: Bene! I meccanici guadagnano un sacco di soldi \n\n**Figlia**: Sì papà, però lui usa sempre un gergo meccanico e mi dice: che bel paraurti che hai; che bei fanali che hai ecc. \n\n**Papà**: Non preoccuparti cara, lascialo dire quello che vuole, l’importante che non apra il cofano e metta le mani nel motore',
        'Dopo un massacrante turno in fabbrica, il 31 dicembre il marito riesce a rientrare qualche secondo prima della mezzanotte per festeggiare l’anno nuovo. Purtroppo, trova la moglie a letto con un altro. Distrutto non riesce a dire altro che un “Ma questo chi è?”. “Ma caro, è l’ultimo dell’anno!”.',
        'Facendo uno strappo ai regolamenti, premurosamente, il maresciallo richiama l’appuntato di guardia alla caserma; “Dai, vieni dentro che piove”. “No, grazie, anche qui fuori piove!”',
        'Il maestro entra nella sua nuova classe e con tono sarcastico dice: “Se ci sono idioti in questa aula, si alzino per favore!”. Dopo un po’ di silenzio, uno degli studenti si alza in piedi.\n\nIl maestro allora gli chiede: “Dunque, perché ti consideri un idiota?!”\n\nE lo studente: “Beh, in realtà non mi considero tale, ma odio vederla in piedi là tutto da solo”.',
        'Lo sai? Fare tanto sesso rende intelligenti!\n\nNon ho capito…',
        'Moglie: “Che programmi hai per le vacanze di Pasqua”?\n\nMarito: “Lo stesso di Gesù, sparire il venerdì e tornare la domenica; e tu?”.\n\nMoglie: “Lo stesso di Giuda, tradirti”.',
        'Fra uomini.\n\n“Mia moglie è un angelo!”.\n\nBeato te, la mia è ancora viva.',
        'Ho finito le battute che avevo in serbo; ora comincio con quelle in croato.',
        '“Mamma, ma non aspettiamo papà per mangiare?”. “Se dovevo aspettare tuo padre, tu ancora non eri nato!”.',
        'Ho dovuto lavare il caffè.\n\nPerché?\n\nEra macchiato…',
        'A momenti ci scappava il morto… poi l’abbiamo ripreso e il funerale è andato benissimo.',
        'Se vi siete offesi leggendo le nostre battute vi chiediamo sinceramente scusa; non pensavamo sapeste leggere.',
        'Madre colpisce il figlio con un ferro da stiro: aveva preso una brutta piega.',
        'Bomba esplode al cimitero. Tutti morti.',
        'Tra amici: “Ti piacerebbe fare sesso a tre?”\n\n“Certo, sarebbe il mio sogno”\n\n“Beh allora corri a casa forse sei ancora a tempo”',
        'Tra amici: “Ehi ragazzi, l’avete sentita l’ultima?”\n\n“No”\n\n“Per forza, l’ho fatta piano!”',
        'Non passavo una giornata così di merda da ieri!',
        'Prova a dire “bella” a una ragazza e non se lo ricorderà. Ma prova a dirle “grassa” e vedrai che se lo ricorderà. Gli elefanti hanno una buona memoria!',
      ];
      await message.channel.send(battute[Math.floor(Math.random() * battute.length)]);
    }
}
