/**
 * ============================================================================
 * 🧸 PINK TEDDY WONDERLAND — CUSTOM ANIMATED SVG CARTOON TEDDY ART & GRAPHICS
 * Khushiii (My Latu) & Shomayyy — Kawaii Pink Teddy Bear Love Universe
 * ============================================================================
 */

window.TeddyArt = {
  /**
   * 0. PLEADING "SORRY" TEDDY (Holding ears with puppy eyes - Kaan Pakad Ke Sorry)
   */
  renderSorryTeddy() {
    return `
      <svg class="teddy-svg sorry-teddy-svg" viewBox="0 0 360 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="furPinkSorry" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFD1DC"/>
            <stop offset="65%" stop-color="#FF94B2"/>
            <stop offset="100%" stop-color="#E85A84"/>
          </radialGradient>
          <radialGradient id="furLightSorry" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#FFF8FA"/>
            <stop offset="100%" stop-color="#FFDCE6"/>
          </radialGradient>
          <radialGradient id="tearDropGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#BEE9E8"/>
            <stop offset="60%" stop-color="#62B6CB"/>
            <stop offset="100%" stop-color="#1B4965"/>
          </radialGradient>
          <filter id="softShadowSorry" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#C93B6B" flood-opacity="0.22"/>
          </filter>
        </defs>

        <!-- Floor shadow -->
        <ellipse cx="180" cy="330" rx="110" ry="14" fill="#D94B76" opacity="0.22"/>

        <!-- Little floating hearts above head -->
        <g class="svg-float-hearts">
          <path class="float-h1" d="M180 32 C180 24 168 24 168 32 C168 40 180 48 180 48 C180 48 192 40 192 32 C192 24 180 24 180 32 Z" fill="#FF477E"/>
          <text x="180" y="20" text-anchor="middle" fill="#BD1A4F" font-family="'Caveat', cursive" font-weight="700" font-size="16">Maaf krdo na bby... 🥺</text>
        </g>

        <g class="teddy-whole-body" filter="url(#softShadowSorry)">
          <!-- Chubby Feet -->
          <ellipse cx="120" cy="306" rx="32" ry="24" transform="rotate(-10 120 306)" fill="url(#furPinkSorry)" stroke="#D84B73" stroke-width="2.5"/>
          <ellipse cx="118" cy="310" rx="15" ry="11" transform="rotate(-10 118 310)" fill="url(#furLightSorry)"/>
          <circle cx="108" cy="298" r="4" fill="#FF85A9"/>
          <circle cx="119" cy="295" r="4" fill="#FF85A9"/>
          <circle cx="130" cy="298" r="4" fill="#FF85A9"/>

          <ellipse cx="240" cy="306" rx="32" ry="24" transform="rotate(10 240 306)" fill="url(#furPinkSorry)" stroke="#D84B73" stroke-width="2.5"/>
          <ellipse cx="242" cy="310" rx="15" ry="11" transform="rotate(10 242 310)" fill="url(#furLightSorry)"/>
          <circle cx="230" cy="298" r="4" fill="#FF85A9"/>
          <circle cx="241" cy="295" r="4" fill="#FF85A9"/>
          <circle cx="252" cy="298" r="4" fill="#FF85A9"/>

          <!-- Body -->
          <ellipse cx="180" cy="245" rx="76" ry="68" fill="url(#furPinkSorry)" stroke="#D84B73" stroke-width="2.5"/>
          <ellipse cx="180" cy="248" rx="42" ry="38" fill="url(#furLightSorry)"/>

          <!-- Head Group -->
          <g class="teddy-head-group">
            <!-- Left Ear -->
            <circle cx="112" cy="80" r="34" fill="url(#furPinkSorry)" stroke="#D84B73" stroke-width="2.5"/>
            <circle cx="114" cy="82" r="19" fill="url(#furLightSorry)"/>

            <!-- Right Ear -->
            <circle cx="248" cy="80" r="34" fill="url(#furPinkSorry)" stroke="#D84B73" stroke-width="2.5"/>
            <circle cx="246" cy="82" r="19" fill="url(#furLightSorry)"/>

            <!-- Main Head -->
            <ellipse cx="180" cy="138" rx="78" ry="68" fill="url(#furPinkSorry)" stroke="#D84B73" stroke-width="2.5"/>

            <!-- Blushing Cheeks -->
            <circle cx="122" cy="154" r="22" fill="#FF2A6D" opacity="0.6"/>
            <circle cx="238" cy="154" r="22" fill="#FF2A6D" opacity="0.6"/>

            <!-- Pleading Eyebrows (Slanted up in center) -->
            <path d="M130 110 Q145 118 158 114" stroke="#661430" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M230 110 Q215 118 202 114" stroke="#661430" stroke-width="3" stroke-linecap="round" fill="none"/>

            <!-- Big Glossy Pleading Anime Eyes (Puppy Eyes with sparkle teardrops) -->
            <g class="sorry-eyes">
              <ellipse cx="144" cy="132" rx="13" ry="15" fill="#2B101C"/>
              <circle cx="139" cy="126" r="6" fill="#FFFFFF"/>
              <circle cx="150" cy="138" r="3.2" fill="#FFFFFF"/>
              <circle cx="140" cy="142" r="2" fill="#FFFFFF"/>

              <ellipse cx="216" cy="132" rx="13" ry="15" fill="#2B101C"/>
              <circle cx="211" cy="126" r="6" fill="#FFFFFF"/>
              <circle cx="222" cy="138" r="3.2" fill="#FFFFFF"/>
              <circle cx="212" cy="142" r="2" fill="#FFFFFF"/>

              <!-- Sparkle Teardrop on Corner -->
              <path d="M125 142 C125 137 120 137 120 142 C120 146 125 150 125 150 C125 150 130 146 130 142 Z" fill="url(#tearDropGrad)" opacity="0.85"/>
              <path d="M235 142 C235 137 240 137 240 142 C240 146 235 150 235 150 C235 150 230 146 230 142 Z" fill="url(#tearDropGrad)" opacity="0.85"/>
            </g>

            <!-- Snout & Pouting Mouth -->
            <ellipse cx="180" cy="158" rx="26" ry="19" fill="url(#furLightSorry)" stroke="#F284A7" stroke-width="1.5"/>
            <path d="M180 152 C180 147 172 147 172 152 C172 156 180 161 180 161 C180 161 188 156 188 152 C188 147 180 147 180 152 Z" fill="#D92B62"/>
            <!-- Cute Quivering Pout -->
            <path d="M171 169 Q180 163 189 169" stroke="#6B1832" stroke-width="2.8" stroke-linecap="round" fill="none"/>
          </g>

          <!-- PAWS HOLDING EARS (Kaan Pakad Ke Sorry Pose!) -->
          <!-- Left Arm reaching up to left ear -->
          <g class="arm-left-sorry">
            <path d="M130 220 Q95 180 106 100" stroke="url(#furPinkSorry)" stroke-width="28" stroke-linecap="round" fill="none"/>
            <path d="M130 220 Q95 180 106 100" stroke="#D84B73" stroke-width="2.5" fill="none"/>
            <!-- Left Paw holding ear -->
            <ellipse cx="106" cy="95" rx="16" ry="14" fill="url(#furPinkSorry)" stroke="#D84B73" stroke-width="2.5"/>
            <circle cx="106" cy="95" r="7" fill="url(#furLightSorry)"/>
          </g>

          <!-- Right Arm reaching up to right ear -->
          <g class="arm-right-sorry">
            <path d="M230 220 Q265 180 254 100" stroke="url(#furPinkSorry)" stroke-width="28" stroke-linecap="round" fill="none"/>
            <path d="M230 220 Q265 180 254 100" stroke="#D84B73" stroke-width="2.5" fill="none"/>
            <!-- Right Paw holding ear -->
            <ellipse cx="254" cy="95" rx="16" ry="14" fill="url(#furPinkSorry)" stroke="#D84B73" stroke-width="2.5"/>
            <circle cx="254" cy="95" r="7" fill="url(#furLightSorry)"/>
          </g>
        </g>
      </svg>
    `;
  },

  /**
   * 1. LOCK SCREEN TEDDY (Holding a giant ribbon-tied pink love envelope)
   */
  renderLockTeddy() {
    return `
      <svg class="teddy-svg lock-teddy-svg" viewBox="0 0 360 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="furPink" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFD1DC"/>
            <stop offset="65%" stop-color="#FF94B2"/>
            <stop offset="100%" stop-color="#E85A84"/>
          </radialGradient>
          <radialGradient id="furLight" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#FFF8FA"/>
            <stop offset="100%" stop-color="#FFDCE6"/>
          </radialGradient>
          <radialGradient id="cheekGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FF3366" stop-opacity="0.65"/>
            <stop offset="100%" stop-color="#FF3366" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF3F7"/>
            <stop offset="100%" stop-color="#FFC8D7"/>
          </linearGradient>
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF2A6D"/>
            <stop offset="100%" stop-color="#C2185B"/>
          </linearGradient>
          <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#C93B6B" flood-opacity="0.22"/>
          </filter>
        </defs>

        <!-- Floor shadow -->
        <ellipse cx="180" cy="330" rx="112" ry="14" fill="#D94B76" opacity="0.2"/>

        <!-- Floating hearts & sparkles -->
        <g class="svg-float-hearts">
          <path class="float-h1" d="M55 95 C55 86 42 86 42 95 C42 86 29 86 29 95 C29 106 42 114 42 120 C42 114 55 106 55 95 Z" fill="#FF477E" opacity="0.8"/>
          <path class="float-h2" d="M325 80 C325 72 314 72 314 80 C314 72 303 72 303 80 C303 90 314 97 314 102 C314 97 325 90 325 80 Z" fill="#FF759E" opacity="0.85"/>
          <circle cx="75" cy="52" r="4.5" fill="#FFD166"/>
          <circle cx="290" cy="48" r="5" fill="#FFD166"/>
        </g>

        <g class="teddy-whole-body" filter="url(#softShadow)">
          <!-- Chubby Feet -->
          <g class="teddy-feet">
            <ellipse cx="115" cy="306" rx="34" ry="26" transform="rotate(-12 115 306)" fill="url(#furPink)" stroke="#D84B73" stroke-width="2.5"/>
            <ellipse cx="113" cy="310" rx="16" ry="12" transform="rotate(-12 113 310)" fill="url(#furLight)"/>
            <circle cx="102" cy="296" r="4.5" fill="#FF85A9"/>
            <circle cx="114" cy="293" r="4.5" fill="#FF85A9"/>
            <circle cx="125" cy="297" r="4.5" fill="#FF85A9"/>

            <ellipse cx="245" cy="306" rx="34" ry="26" transform="rotate(12 245 306)" fill="url(#furPink)" stroke="#D84B73" stroke-width="2.5"/>
            <ellipse cx="247" cy="310" rx="16" ry="12" transform="rotate(12 247 310)" fill="url(#furLight)"/>
            <circle cx="235" cy="297" r="4.5" fill="#FF85A9"/>
            <circle cx="246" cy="293" r="4.5" fill="#FF85A9"/>
            <circle cx="258" cy="296" r="4.5" fill="#FF85A9"/>
          </g>

          <!-- Chubby Body -->
          <ellipse cx="180" cy="242" rx="78" ry="70" fill="url(#furPink)" stroke="#D84B73" stroke-width="2.5"/>

          <!-- Head Group -->
          <g class="teddy-head-group">
            <g class="teddy-ear-left">
              <circle cx="112" cy="76" r="34" fill="url(#furPink)" stroke="#D84B73" stroke-width="2.5"/>
              <circle cx="114" cy="78" r="19" fill="url(#furLight)"/>
            </g>
            <g class="teddy-ear-right">
              <circle cx="248" cy="76" r="34" fill="url(#furPink)" stroke="#D84B73" stroke-width="2.5"/>
              <circle cx="246" cy="78" r="19" fill="url(#furLight)"/>
              <path d="M225 56 C212 44 212 68 225 62 Z" fill="#FF1E62"/>
              <path d="M233 56 C246 44 246 68 233 62 Z" fill="#FF1E62"/>
              <circle cx="229" cy="59" r="5" fill="#FFD1E0"/>
            </g>

            <ellipse cx="180" cy="128" rx="76" ry="66" fill="url(#furPink)" stroke="#D84B73" stroke-width="2.5"/>
            <path d="M172 64 Q180 48 186 62 Q194 52 192 65" stroke="#D84B73" stroke-width="3" fill="url(#furPink)" stroke-linecap="round"/>

            <circle class="teddy-blush" cx="126" cy="142" r="20" fill="url(#cheekGlow)"/>
            <circle class="teddy-blush" cx="234" cy="142" r="20" fill="url(#cheekGlow)"/>

            <g class="teddy-eyes">
              <circle cx="144" cy="124" r="11" fill="#3D1A28"/>
              <circle cx="140.5" cy="120" r="4.2" fill="#FFFFFF"/>
              <circle cx="147.5" cy="127" r="2.2" fill="#FFFFFF"/>
              <circle cx="216" cy="124" r="11" fill="#3D1A28"/>
              <circle cx="212.5" cy="120" r="4.2" fill="#FFFFFF"/>
              <circle cx="219.5" cy="127" r="2.2" fill="#FFFFFF"/>
            </g>

            <ellipse cx="180" cy="144" rx="26" ry="20" fill="url(#furLight)" stroke="#F284A7" stroke-width="1.5"/>
            <path d="M180 140 C180 134 170 134 170 140 C170 145 180 150 180 150 C180 150 190 145 190 140 C190 134 180 134 180 140 Z" fill="#D92B62"/>
            <path d="M180 150 L180 156 M171 155 Q180 162 189 155" stroke="#7A203D" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          </g>

          <!-- Big Ribbon-Tied Love Envelope -->
          <g class="lock-envelope-group">
            <rect x="96" y="184" width="168" height="108" rx="14" fill="url(#envGrad)" stroke="#FF6B98" stroke-width="3"/>
            <path d="M99 187 L180 244 L261 187" fill="#FFD9E6" stroke="#FF6B98" stroke-width="2.5" stroke-linejoin="round"/>
            <rect x="96" y="232" width="168" height="13" fill="url(#ribbonGrad)" opacity="0.9"/>
            
            <g class="envelope-heart-seal">
              <circle cx="180" cy="238" r="23" fill="#FF2A6D" stroke="#FFF" stroke-width="3"/>
              <path d="M180 231 C180 224 167 224 167 232 C167 241 180 249 180 249 C180 249 193 241 193 232 C193 224 180 224 180 231 Z" fill="#FFF5F8"/>
            </g>
            <text x="180" y="278" text-anchor="middle" fill="#BD1A4F" font-family="'Quicksand', sans-serif" font-weight="800" font-size="12">For Khushiii (My Latu) 💖</text>
          </g>

          <ellipse cx="102" cy="228" rx="26" ry="20" transform="rotate(20 102 228)" fill="url(#furPink)" stroke="#D84B73" stroke-width="2.5"/>
          <circle cx="108" cy="228" r="8" fill="url(#furLight)"/>
          <ellipse cx="258" cy="228" rx="26" ry="20" transform="rotate(-20 258 228)" fill="url(#furPink)" stroke="#D84B73" stroke-width="2.5"/>
          <circle cx="252" cy="228" r="8" fill="url(#furLight)"/>
        </g>
      </svg>
    `;
  },

  /**
   * 2. HERO CUDDLE TEDDIES (Shomayyy Bear & Latu Bear on a Pastel Cloud)
   */
  renderCuddleTeddies() {
    return `
      <svg class="teddy-svg hero-cuddle-svg" viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="shomayFur" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFBDD3"/>
            <stop offset="65%" stop-color="#FF85AA"/>
            <stop offset="100%" stop-color="#DE4E7E"/>
          </radialGradient>
          <radialGradient id="latuFur" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFDCE8"/>
            <stop offset="65%" stop-color="#FFA8C6"/>
            <stop offset="100%" stop-color="#F26D97"/>
          </radialGradient>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#FFE0EC"/>
          </linearGradient>
          <radialGradient id="balloonGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#FF759E"/>
            <stop offset="60%" stop-color="#FF2A6D"/>
            <stop offset="100%" stop-color="#B71549"/>
          </radialGradient>
        </defs>

        <circle cx="260" cy="210" r="145" fill="#FFAEC9" opacity="0.2"/>

        <g class="hero-heart-balloon">
          <path d="M370 155 Q395 215 352 255" stroke="#E05780" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
          <path d="M390 68 C390 42 350 42 350 70 C350 42 310 42 310 68 C310 102 350 124 350 144 C350 124 390 102 390 68 Z" fill="url(#balloonGrad)"/>
          <ellipse cx="328" cy="64" rx="8" ry="14" transform="rotate(-25 328 64)" fill="#FFFFFF" opacity="0.45"/>
          <text x="350" y="92" text-anchor="middle" fill="#FFF" font-family="'Quicksand', sans-serif" font-weight="800" font-size="12.5">Latu 💖</text>
        </g>

        <g class="hero-heart-balloon-left">
          <path d="M135 165 Q115 215 155 255" stroke="#E05780" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
          <path d="M165 82 C165 60 132 60 132 82 C132 60 99 60 99 82 C99 108 132 126 132 142 C132 126 165 108 165 82 Z" fill="#FF477E"/>
          <text x="132" y="103" text-anchor="middle" fill="#FFF" font-family="'Quicksand', sans-serif" font-weight="800" font-size="11">13:42 ✨</text>
        </g>

        <g class="cuddle-pair-group">
          <!-- SHOMAYYY BEAR -->
          <g class="shomayyy-bear">
            <circle cx="160" cy="128" r="28" fill="url(#shomayFur)" stroke="#D44775" stroke-width="2.5"/>
            <circle cx="162" cy="130" r="15" fill="#FFE6EF"/>
            <circle cx="255" cy="122" r="28" fill="url(#shomayFur)" stroke="#D44775" stroke-width="2.5"/>
            <circle cx="253" cy="124" r="15" fill="#FFE6EF"/>

            <ellipse cx="206" cy="265" rx="64" ry="58" fill="url(#shomayFur)" stroke="#D44775" stroke-width="2.5"/>
            <ellipse cx="208" cy="268" rx="38" ry="36" fill="#FFE8F0"/>
            <path d="M208 258 C208 251 197 251 197 258 C197 265 208 272 208 272 C208 272 219 265 219 258 C219 251 208 251 208 258 Z" fill="#FF2A6D" opacity="0.75"/>

            <g transform="rotate(6 210 175)">
              <ellipse cx="210" cy="175" rx="64" ry="56" fill="url(#shomayFur)" stroke="#D44775" stroke-width="2.5"/>
              <circle cx="166" cy="188" r="16" fill="#FF3E78" opacity="0.5"/>
              <circle cx="250" cy="188" r="16" fill="#FF3E78" opacity="0.5"/>
              <circle cx="182" cy="172" r="8.5" fill="#3D1A28"/>
              <circle cx="179.5" cy="169" r="3.2" fill="#FFF"/>
              <circle cx="236" cy="172" r="8.5" fill="#3D1A28"/>
              <circle cx="233.5" cy="169" r="3.2" fill="#FFF"/>

              <ellipse cx="210" cy="190" rx="22" ry="16" fill="#FFF2F6"/>
              <path d="M210 185 C210 180 202 180 202 185 C202 189 210 194 210 194 C210 194 218 189 218 185 C218 180 210 180 210 185 Z" fill="#D81B60"/>
              <path d="M202 198 Q210 205 218 198" stroke="#7A203D" stroke-width="2.4" stroke-linecap="round" fill="none"/>
            </g>
          </g>

          <!-- KHUSHIII (MY LATU) BEAR -->
          <g class="latu-bear">
            <circle cx="272" cy="142" r="26" fill="url(#latuFur)" stroke="#DE5382" stroke-width="2.5"/>
            <circle cx="274" cy="144" r="14" fill="#FFF5F8"/>
            <circle cx="362" cy="148" r="26" fill="url(#latuFur)" stroke="#DE5382" stroke-width="2.5"/>
            <circle cx="360" cy="150" r="14" fill="#FFF5F8"/>

            <path d="M298 134 L305 110 L318 124 L331 110 L338 134 Z" fill="#FFD166" stroke="#F4A261" stroke-width="2" stroke-linejoin="round"/>
            <circle cx="305" cy="108" r="3" fill="#FF2A6D"/>
            <circle cx="318" cy="106" r="3.5" fill="#FF2A6D"/>
            <circle cx="331" cy="108" r="3" fill="#FF2A6D"/>

            <ellipse cx="312" cy="272" rx="58" ry="54" fill="url(#latuFur)" stroke="#DE5382" stroke-width="2.5"/>
            <ellipse cx="310" cy="275" rx="34" ry="32" fill="#FFF5F8"/>

            <g transform="rotate(-9 312 192)">
              <ellipse cx="312" cy="192" rx="58" ry="52" fill="url(#latuFur)" stroke="#DE5382" stroke-width="2.5"/>
              <path d="M276 188 Q286 178 296 188" stroke="#3D1A28" stroke-width="3.2" stroke-linecap="round" fill="none"/>
              <path d="M273 184 L269 179 M278 181 L276 176" stroke="#3D1A28" stroke-width="2" stroke-linecap="round"/>
              <path d="M326 188 Q336 178 346 188" stroke="#3D1A28" stroke-width="3.2" stroke-linecap="round" fill="none"/>
              <path d="M349 184 L353 179 M344 181 L346 176" stroke="#3D1A28" stroke-width="2" stroke-linecap="round"/>

              <circle cx="272" cy="202" r="15" fill="#FF2A6D" opacity="0.55"/>
              <circle cx="350" cy="202" r="15" fill="#FF2A6D" opacity="0.55"/>

              <ellipse cx="312" cy="204" rx="20" ry="14.5" fill="#FFF7FA"/>
              <path d="M312 200 C312 195 305 195 305 200 C305 204 312 208 312 208 C312 208 319 204 319 200 C319 195 312 195 312 200 Z" fill="#FF2A6D"/>
              <path d="M304 211 Q312 218 320 211" stroke="#7A203D" stroke-width="2.4" stroke-linecap="round" fill="none"/>
            </g>

            <ellipse cx="258" cy="252" rx="24" ry="17" transform="rotate(-18 258 252)" fill="url(#shomayFur)" stroke="#D44775" stroke-width="2"/>
            <ellipse cx="274" cy="264" rx="22" ry="16" transform="rotate(15 274 264)" fill="url(#latuFur)" stroke="#DE5382" stroke-width="2"/>
          </g>

          <path class="center-cuddle-heart" d="M263 145 C263 135 249 135 249 145 C249 135 235 135 235 145 C235 158 249 167 249 175 C249 167 263 158 263 145 Z" fill="#FF2A6D"/>
        </g>

        <g class="pastel-cloud-base">
          <path d="M95 335 C65 335 50 308 75 292 C68 268 102 252 128 268 C148 245 195 248 212 270 C238 250 285 250 308 272 C332 250 378 252 395 275 C425 262 455 282 442 305 C462 320 445 345 415 345 Z" fill="url(#cloudGrad)" stroke="#FFAEC9" stroke-width="2.5"/>
          <text x="260" y="320" text-anchor="middle" fill="#C2185B" font-family="'Quicksand', sans-serif" font-weight="800" font-size="14">Shomayyy 🧸💖 Khushiii (My Latu)</text>
        </g>
      </svg>
    `;
  },

  /**
   * 3. MINI MOOD TEDDIES
   */
  renderMoodTeddy(mood = 'blushing') {
    const isAngry = mood === 'angry-cute';
    const isCrown = mood === 'crown';
    const isLoveEyes = mood === 'love-eyes';
    const isHugging = mood === 'hugging';

    return `
      <svg class="mini-mood-teddy mood-${mood}" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="84" r="64" fill="#FFF2F7" stroke="#FFBFD3" stroke-width="2"/>
        <circle cx="42" cy="48" r="20" fill="#FF9EBB" stroke="#E05780" stroke-width="2"/>
        <circle cx="43" cy="49" r="11" fill="#FFE5EE"/>
        <circle cx="118" cy="48" r="20" fill="#FF9EBB" stroke="#E05780" stroke-width="2"/>
        <circle cx="117" cy="49" r="11" fill="#FFE5EE"/>

        ${
          isCrown
            ? `<path d="M62 38 L68 18 L80 30 L92 18 L98 38 Z" fill="#FFD166" stroke="#E69A28" stroke-width="2"/>`
            : ''
        }

        <ellipse cx="80" cy="86" rx="48" ry="42" fill="#FF9EBB" stroke="#E05780" stroke-width="2.2"/>
        <circle cx="48" cy="94" r="${isAngry ? 15 : 11}" fill="#FF2A6D" opacity="${isAngry ? 0.8 : 0.45}"/>
        <circle cx="112" cy="94" r="${isAngry ? 15 : 11}" fill="#FF2A6D" opacity="${isAngry ? 0.8 : 0.45}"/>

        ${
          isAngry
            ? `
          <path d="M50 67 L68 76" stroke="#5C102A" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M110 67 L92 76" stroke="#5C102A" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="60" cy="82" r="6.5" fill="#3D1A28"/>
          <circle cx="58" cy="80" r="2.2" fill="#FFF"/>
          <circle cx="100" cy="82" r="6.5" fill="#3D1A28"/>
          <circle cx="98" cy="80" r="2.2" fill="#FFF"/>
          <path d="M120 34 Q126 40 120 46 M130 34 Q124 40 130 46" stroke="#FF2A6D" stroke-width="3" stroke-linecap="round"/>
        `
            : isLoveEyes
            ? `
          <path d="M65 78 C65 71 55 71 55 78 C55 71 45 71 45 78 C45 86 55 92 55 97 C55 92 65 86 65 78 Z" fill="#FF1E62"/>
          <path d="M115 78 C115 71 105 71 105 78 C105 71 95 71 95 78 C95 86 105 92 105 97 C105 92 115 86 115 78 Z" fill="#FF1E62"/>
        `
            : `
          <circle cx="58" cy="80" r="7" fill="#3D1A28"/>
          <circle cx="56" cy="78" r="2.5" fill="#FFF"/>
          <circle cx="102" cy="80" r="7" fill="#3D1A28"/>
          <circle cx="100" cy="78" r="2.5" fill="#FFF"/>
        `
        }

        <ellipse cx="80" cy="97" rx="17" ry="13" fill="#FFF4F7"/>
        <path d="M80 92 C80 88 73 88 73 92 C73 96 80 100 80 100 C80 100 87 96 87 92 C87 88 80 88 80 92 Z" fill="#D81B60"/>
        ${
          isAngry
            ? `<path d="M72 106 Q80 99 88 106" stroke="#5C102A" stroke-width="2.8" stroke-linecap="round" fill="none"/>`
            : `<path d="M72 103 Q80 110 88 103" stroke="#5C102A" stroke-width="2.5" stroke-linecap="round" fill="none"/>`
        }

        ${
          isHugging
            ? `<rect x="46" y="118" width="68" height="22" rx="11" fill="#FF2A6D"/><text x="80" y="133" text-anchor="middle" fill="#FFF" font-size="11" font-weight="800" font-family="'Quicksand', sans-serif">13:42 🤗</text>`
            : `<path d="M88 26 C88 21 80 21 80 26 C80 21 72 21 72 26 C72 33 80 38 80 42 C80 38 88 33 88 26 Z" fill="#FF477E"/>`
        }
      </svg>
    `;
  },

  /**
   * 4. ILLUSTRATED POLAROID PLACEHOLDERS
   */
  renderPolaroidIllustration(theme = 'princess', folderHint = 'photos/her-solo/') {
    const configs = {
      'crown-teddy': {
        bg1: '#FFE3EE',
        bg2: '#FFB8D1',
        badge: '👑 My Latu',
        subtitle: 'Special Spotlight',
        mood: 'crown'
      },
      'cuddle-teddies': {
        bg1: '#FFEBF2',
        bg2: '#FFA8C5',
        badge: '🕰️ 28 Oct • 13:42',
        subtitle: 'Our First Meet',
        mood: 'hugging'
      },
      princess: {
        bg1: '#FFF0F6',
        bg2: '#FFC2D9',
        badge: '👀 Mesmerizing Eyes',
        subtitle: 'Khushiii',
        mood: 'crown'
      },
      strawberry: {
        bg1: '#FFE5EC',
        bg2: '#FF9EBB',
        badge: '💋 Smile & Pretty Lips',
        subtitle: 'My Sunshine',
        mood: 'love-eyes'
      },
      'mirror-pose': {
        bg1: '#FDE8F3',
        bg2: '#F7A8CB',
        badge: '🌸 Gorgeous Face',
        subtitle: 'Pure Perfection',
        mood: 'blushing'
      },
      'date-night': {
        bg1: '#FFE6F0',
        bg2: '#FF8FA8',
        badge: '💑 28 Oct • 13:42',
        subtitle: 'Shomayyy & Latu',
        mood: 'hugging'
      },
      'sunset-hug': {
        bg1: '#FFE0E9',
        bg2: '#FF94B2',
        badge: '🤗 Never Give Up On Us',
        subtitle: 'My Forever Girl',
        mood: 'love-eyes'
      },
      'silly-face': {
        bg1: '#FFE0EB',
        bg2: '#FF80A6',
        badge: '😤 Her Cute Anger!',
        subtitle: 'Adorable Nakhre',
        mood: 'angry-cute'
      },
      'boba-teddy': {
        bg1: '#FFF0F5',
        bg2: '#FFB3C9',
        badge: '🎀 Dramatic Cutie Latu',
        subtitle: 'My Baby',
        mood: 'blushing'
      }
    };

    const cfg = configs[theme] || configs.princess;
    return `
      <div class="teddy-polaroid-art" style="background: linear-gradient(145deg, ${cfg.bg1}, ${cfg.bg2});">
        <span class="polaroid-art-badge">${cfg.badge}</span>
        <div class="polaroid-art-teddy-wrap">
          ${this.renderMoodTeddy(cfg.mood)}
        </div>
        <span class="polaroid-folder-pill">💖 ${cfg.subtitle}</span>
      </div>
    `;
  }
};
