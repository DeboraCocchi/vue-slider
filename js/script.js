const {createApp} = Vue;

createApp({
  data(){
    return{
      path: 'img/',
      paintings: [
        {
          author: "Pieter Bruegel il Vecchio",
          year: 1562,
          title: "Trionfo della morte",
          more: "I toni caldi del quadro evocano un'atmosfera infernale, che ben rappresenta la drammaticità del momento. La Morte, infatti, è giunta e sta uccidendo gli uomini, che reagiscono nei più svariati modi: sorpresa, sgomento, rassegnazione, inutile ribellione o indifferenza - come la coppia in basso a destra, che ignora quanto sta avvenendo distraendosi con la musica (rappresentazione della lussuria) di un liuto.",
          image:"bruegel.jpeg"
        },
        {
          author:"Alexandre Cabanel",
          year: 1847,
          title: "L'angelo caduto",
          more: "Il dipinto immortala l’esatto momento in cui dal risentimento della caduta nasce la ribellione dell’angelo 'perfetto in bellezza': uno sguardo pieno di rabbia e di indignazione sconvolge lo spettatore. L’atmosfera è tesa e pungente, accentuata da alcuni piccoli gesti e dettagli: la posizione scomoda, con la schiena poggiata, mostra un corpo carico di energia distruttiva e pronto a colpire. Anche la posizione degli arti e il tono della muscolatura inducono quasi una sorta di violenza, una reazione furiosa nei confronti di un gesto imperdonabile.",
          image:'cabanel.jpeg'
        },
        
        {
          author: "Vincent Van Gogh",
          year: 1890,
          title: "Campo di grano con volo di corvi",
          more: "In questo quadro si ha una chiara rappresentazione dello stato d'animo tormentato e angosciato dell'artista: la tela è uno straziante grido di dolore, accentuato dal ritmo vorticoso delle pennellate, mediante le quali il pittore proietta il proprio stato d'animo e la propria dimensione di sofferenza sulla realtà circostante.",
          image:"vangogh.jpeg"
        },
        
        {
          author: "Salvador Dalì",
          year: 1946,
          title: "Tentazioni di sant'Antonio",
          more: "Il dipinto mostra Sant'Antonio nel deserto, inginocchiato mentre brandisce una croce per proteggersi dalle tentazioni che lo assalgono, quasi in un gesto di esorcismo. Di fronte a questa processione di sfide, rappresentate dagli animali, Sant'Antonio sembra debole; è nudo e spogliato, relegato nell'angolo sinistro del dipinto, quasi inerme mentre la sua fede viene messa a dura prova.",
          image:"dali.jpeg"
        },
      
        {
          author: "René Magritte",
          year: 1953,
          title: "Golconda",
          more: "La peculiare prospettiva e la vista delle case -di cui è visibile la sola sommità - ci danno un suggerimento sulla posizione dello spettatore: è possibile che anche chi osserva il dipinto sia sospeso a mezz'aria come i curiosi personaggi, identificandosi addirittura come uno di essi. Se la geometria degli elementi suscita entusiasmo e piacevolezza, la moltitudine di figure indistinguibili crea una forte inquietudine: si tratta di una probabile critica all'omologazione e alla meccanicità della routine che mette in luce il rapporto uomo-lavoro, dove le peculiarità dell'individuo sono destinate a venire silenziate in nome del progresso economico.",
          image:"magritte.jpeg"
        }],
      currentIndex: 0,
      isClicked:false,
      isNext : true,
      autoPlayVar: '',
      nonClicked: 'Interrompi autoplay',
      clicked: 'Start autoplay'
      
    }
  },
  methods:{
    prevNext(isNext){
      (isNext) ? this.currentIndex++ : this.currentIndex--;
      if(this.currentIndex===this.paintings.length) this.currentIndex = 0;
      if(this.currentIndex<0) this.currentIndex = this.paintings.length-1;
    },
    thisIsActive(index){
      this.currentIndex = index;
    },
    autoplay(){
      if(this.isClicked === false){
        this.autoPlayVar  = setInterval(() =>
        this.prevNext(true), 3000);
        this.isClicked=true;
      }else{
        clearInterval(this.autoPlayVar);
        this.isClicked = false;
      }
    },
    reversePlay(){
      this.isNext = !this.isNext;
      clearInterval(this.autoPlayVar);
      this.autoPlayVar = setInterval(() =>
      this.prevNext(this.isNext), 3000);
    },
    stop(){
      clearInterval(this.autoPlayVar);
      this.isClicked = false;
    }
  }
}).mount('#app')
