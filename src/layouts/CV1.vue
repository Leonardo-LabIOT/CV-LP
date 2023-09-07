<template>
  <div id="CV2">

    <nav>
      <div class="header box">
        <span class="main-title">
          LEONARDO PEREIRA
        </span>
        <span class="subtitle">
          Front-End | FullStack
        </span>
      </div>
      <div class="contacts box">
        <span class="title">Contatos:</span>
        <div v-if="admin" class="list-container">
          <input v-for="contact in contacts" autocomplete=on :type="contact.type" v-model="contact.value" required>
        </div>
        <div v-else class="list-container">
          <input v-for="contact in contacts" autocomplete=on :type="contact.type" v-model="contact.value" required>
        </div>
      </div>
      <div class='stacks box'>
        <span class="title">Habilidades:</span>
        <ul class="list-container">
          <li class="list-item" v-for="stack in stacks_idx" :key="stack">
            <p class="list-item-name">{{ stacks[stack].name }}</p>
            <div class="skill-bar">
              <span class="skill" :style="{ width: stacks[stack].mastery * 10 + '%' }" />
            </div>
          </li>
        </ul>

      </div>
      <div class="lang box">
        <span class="title">Idiomas:</span>
        <ul class="list-container">
          <li class="list-item">
            <p><b>Português - </b> Nativo</p>
          </li>
          <li class="list-item">
            <p><b>Inglês - </b> Intermediário</p>
          </li>
        </ul>
      </div>
      <div class="qr-code-container box">
        <span class="title">Portifólio:</span>
        <div class="qr-code">
          <div class="img-container">
            <img src="../assets/CV-LabIOT.jfif" alt="qr-code">
          </div>
          <div>
            <a class="link" target="_blank" :href="`http://${portifolio}`">{{ portifolio }}</a>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <div class="about box">
        <span class="title">Sobre:</span>
        <div class="content">
          Desenvolvedor Web especializado em Vue.js, com sólidos conhecimentos da framework e de todo seu ecossistema, em
          busca das
          melhores soluções para a criação de interfaces. Estou aberto a aprender novas tecnologias e determinado a
          superar os desafios na área.
        </div>
      </div>
      <div class="experience box">
        <span class="title">Experiência:</span>
        <div class="content">
          <div>
            <strong>Austhen [08/2022 - atual]</strong>
            <br>
            Experiência sólida na programação de Firmwares, IoT e linguagem C++, atuando como parte do time de
            desenvolvimento responsável pelos dispositivos inteligentes da Loud Áudio e Xcene.

            <!-- Atribuições:
            - Programação de Firmware com foco em tecnologias IoT;
            - Desenvolvimento em C++, POO, arquitetura SOLID;
            - Microcontroladores ESP8266 e ESP32;
            - Elaboração de soluções escaláveis para sistemas embarcados;
            - Boas práticas e clean code;
            - Protocolos de Comunicação;
            - Documentação;
            - Versionamento com Git e GitHub;
            - Metodologia ágil(Scrum) com Jira;

             Experiência com React.JS: -->
            <br>
            <b>Frontend: </b>Desenvolvimento com React.js e Typescript, na manutenção das páginas dos equipamentos (SPA),
            na identificação e correção de bugs e na implementação de novas features.
            <br>
            <!-- <b> Controle de Versionamento e Metodologia Ágil: </b> -->
            Controle e versionamento no Git e GitHub, fluxo de trabalho colaborativo, escalável e facilmente gerenciável.
            Vivência em
            metodologias ágeis(Scrum) e na utilização do Jira.
            <br>
            <b> Stacks: </b> C++, React.js, Typescript, IoT, Git, Jira.
            <br>
            <span class="web-content">
              <b> Site: </b>
              <a class="link" href="http://www.xcene.com.br/Institucional/"> Austhen | Xcene</a>
            </span>

          </div>
        </div>
      </div>
      <div class="academic box">
        <span class="title">Informações Acadêmicas:</span>
        <div class="content">
          <div>
            <strong>IFSP - Instituto Federal de São Paulo: [2019 - atual]</strong>
            <br>
            Superior em Automação Industrial
            <br>
            <span class="web-content">
              <b> Site: </b>
              <a class="link" href="https://spo.ifsp.edu.br/automacao-industrial"> Automação
                Industrial - IFSP</a>
            </span>
          </div>
          <!-- <div>
            <strong>UFABC - Universidade Federal do ABC: [2013 - 2018]</strong>
            <br>
            Engenharia de Energia - Trancado
            <br>
            <span class="web-content">
              <span>
                Site:
              </span>
              <a class="link" href="https://prograd.ufabc.edu.br/cursos/ee"> Engenharia de
                Energia - UFABC</a>
            </span>
          </div> -->
        </div>
      </div>
      <div class="cursos box">
        <span class="title">Cursos:</span>
        <div class="content">
          <div class="curso" v-for="idx in cursos_idx" :key="idx">
            <strong>
              {{ data.cursos[idx]?.name }}
              {{ data.cursos[idx]?.year }}

            </strong>
            <br>
            <p class="cursos-desc">
              {{ data.cursos[idx]?.description }}
            </p>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>
<script lang="ts">
import { useDataStore } from '@/store/data';
export default {
  setup() {
    const data = useDataStore();
    return { data }
  },
  data() {
    return {
      stacks: this.data.stacks,
      contacts: this.data.contacts,
      cursos: this.data.cursos,
      stacks_idx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 16],
      cursos_idx: [0, 1, 2, 3, 4, 5],
      admin: false,
    }
  }, computed: {
    portifolio() {
      const aux = this.data.contacts.filter((e) => e.name === 'portifolio')[0].value
      return aux
    }
  }
}
</script>

<style lang="scss" scoped>
$x: calc(5*var(--param));
$x2: calc(2*$x);
$x_1: calc(0.15*$x);
$border: var(--c-aux) solid $x_1;

#CV2 {
  display: grid;
  background: var(--bg-1);
  height: 100%;
  grid-template-columns: 1.2fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "nav main main";
  // padding: $x;
  color: var(--c-1);
  font-size: var(--f-size-3);
}

.box {
  border-bottom: $border;
  padding: $x $x2 ;
}

main {
  grid-area: main;
  display: flex;
  color: var(--c-1);
  background: var(--bg-1);
  flex-direction: column;
  // margin-right: $x;
}

nav {
  grid-area: nav;
  font-weight: 300;
  color: var(--c-2);
  background: var(--bg-2);
  display: flex;
  flex-direction: column;
  border-right: $border;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--f-size-1);
  font-weight: 700;
  padding-top: $x2;

  .subtitle {
    display: flex;
    font-size: var(--f-size-2);
    font-weight: 300;
  }
}

.contacts {
  input {
    display: flex;
    text-align: start;
    width: 100%;
    color: var(--c-2);
    font-size: var(--f-size-4);
  }

}

.stacks {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: var(--f-size-4);

}

.list-container {
  display: flex;
  flex-direction: column;
  margin: 0 0 0 $x;
}

.list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.list-item-name {
  display: flex;
  flex-direction: row;
  flex: 2;
}

.skill-bar {
  display: flex;
  align-items: center;
  flex: 3;
  height: calc(1.5*var(--param));
  background: var(--c-aux);
  border-radius: calc(1*var(--param));
  margin-left: calc(2*var(--param));

  .skill {
    height: calc(1.5*var(--param));
    border-radius: calc(1*var(--param));
    background: var(--c-2);
  }
}

.qr-code-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  border: none;
}

.qr-code {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  height: 100%;
  justify-content: center;
  padding: 0 calc(5*var(--param));

  .img-container {
    padding: 0 calc(5*var(--param));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    display: flex;
    background: #fff;
    margin: auto;
    padding: calc(1*var(--param));
    height: auto;
    max-width: calc(35*var(--param));
  }

  .link {
    display: flex;
    color: var(--c-2);
    justify-content: center;
  }
}

.link {
  text-decoration: none;
  color: var(--c-1);
  cursor: pointer;
}

.content {
  text-align: justify;
  margin-left: calc(5*var(--param));
}

.web-content {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;

  b {
    margin-right: calc(0.5*var(--f-size-4));
  }
}

.about {
  padding-top: $x2;
}

.cursos {
  text-align: justify;
  border: none;

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: calc(2*var(--param));
  }
}

// .curso {}
.cursos-desc {
  font-size: var(--f-size-4);
}

.title {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  font-size: var(--f-size-2);
  font-weight: 900;
  margin-bottom: calc(1*var(--param));
}

hr {
  width: calc(100% + (20*var(--param)));
  height: calc(0.5*var(--param));
  margin: calc(5*var(--param)) 0 calc(5*var(--param)) calc(-10*var(--param));
  background: var(--c-aux);
  border: var(--c-aux);
}

@media print {
  // * {
  //   --c-2: var(--c-1);
  //   --bg-2: var(--bg-1);
  // }

  .web-content {
    display: none;

  }

  // nav {
  //   color: var(--c-1);
  //   background: var(--bg-1);
  // }
}
</style>
