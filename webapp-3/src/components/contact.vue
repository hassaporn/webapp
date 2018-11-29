<template>
<div :style="'height:' + height + 'px'" class="container">
  <v-timeline>
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-3"
          >
            mdi-magnify
          </v-icon>
          <h2 id="credits">Team Leader</h2>
        </v-card-title>
        <v-container>
            <v-img
                    src="https://www.img.in.th/images/2c9a317e8c3d4947f8ccd4f58c487969.jpg"
                    height="300px"
                    contain
                  ></v-img>
          <v-layout>
            <v-flex xs10>
              <h1 center>นาย ศิรสิทธิ์ เลิศประกอบกิจ 5810110323</h1>
            </v-flex>
            <v-flex xs2>
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 id="credits">UI,UX Programming</h2>
          <v-icon
            dark
            size="42"
          >mdi-home-outline</v-icon>
        </v-card-title>
        <v-container>
            <v-img
                    src="https://www.img.in.th/images/d411484890593bc158c6c08d5a329bc1.jpg"
                    height="300px"
                    contain
                  ></v-img>
          <v-layout>
            <v-flex xs8>
              <h1>นาย ธนพล พืชนุกุล 5810110131</h1>  
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-3"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h2 id="credits">Database</h2>
        </v-card-title>
        <v-container>
            <v-img
                    src="https://www.img.in.th/images/b2fbf1594b0790ae110f858ad51885f1.jpg"
                    height="300px"
                    contain
                  ></v-img>
          <v-layout>
            <v-flex xs8>
              <h1>น.ส.หัสพร สุขวิทย์ 5810110655</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 id="credits"> Software versioning
using Github</h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
            <v-img
                    src="https://www.img.in.th/images/1c52354f2f750ab9940561dc714ceb8b.jpg"
                    height="300px"
                    contain
                  ></v-img>
          <v-layout>
            <v-flex xs2>
              <v-icon size="64">mdi-server-network</v-icon>
            </v-flex>
            <v-flex xs10>
              <h1>น.ส.ธัญชนก ทิพย์มณีโกมุท 5810110149</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon
            class="mr-3"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h2 id="credits">Testing</h2>
        </v-card-title>
        <v-container>
            <v-img
                    src="https://www.img.in.th/images/8c736473343b790926b32208e936d9de.jpg"
                    height="300px"
                    contain
                  ></v-img>
          <v-layout>
            <v-flex xs8>
              <h1>น.ส.วรนิษฐา ซุ่นเส้ง 5810110294</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>