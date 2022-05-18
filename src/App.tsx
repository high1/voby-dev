import { $, Switch } from "voby";

function App(): JSX.Element {
  const route = $("/");

  return (
    <main class="bg-[#fff6db] text-[#2f2f2f] w-screen h-screen flex-col flex-center">
      <section class="h-[60vmin] pointer-events-none">
         <svg width="100%" height="100%" viewBox="0 0 1280 640" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
           <g id="Text--Light-" serif:id="Text (Light)" transform="matrix(1.2073,0,0,1.2073,-148.264,7.23434)">
            <g transform="matrix(208.011,0,0,208.011,539.747,311.793)">
              <path d="M0.126,-0.258C0.126,-0.289 0.13,-0.317 0.139,-0.342C0.147,-0.366 0.158,-0.386 0.173,-0.403C0.188,-0.42 0.205,-0.432 0.225,-0.441C0.244,-0.45 0.265,-0.454 0.287,-0.454C0.309,-0.454 0.33,-0.45 0.35,-0.441C0.369,-0.432 0.386,-0.42 0.401,-0.403C0.416,-0.386 0.427,-0.366 0.436,-0.342C0.444,-0.317 0.448,-0.289 0.448,-0.258C0.448,-0.227 0.444,-0.199 0.436,-0.175C0.427,-0.15 0.416,-0.13 0.401,-0.114C0.386,-0.097 0.369,-0.085 0.35,-0.076C0.33,-0.067 0.309,-0.063 0.287,-0.063C0.265,-0.063 0.244,-0.067 0.225,-0.076C0.205,-0.085 0.188,-0.097 0.173,-0.114C0.158,-0.13 0.147,-0.15 0.139,-0.175C0.13,-0.199 0.126,-0.227 0.126,-0.258ZM0.036,-0.258C0.036,-0.22 0.041,-0.185 0.052,-0.152C0.063,-0.119 0.079,-0.091 0.1,-0.067C0.121,-0.042 0.148,-0.023 0.179,-0.01C0.21,0.004 0.246,0.011 0.287,0.011C0.328,0.011 0.365,0.004 0.396,-0.01C0.427,-0.023 0.453,-0.042 0.474,-0.067C0.495,-0.091 0.511,-0.119 0.522,-0.152C0.533,-0.185 0.538,-0.22 0.538,-0.258C0.538,-0.296 0.533,-0.331 0.522,-0.365C0.511,-0.398 0.495,-0.426 0.474,-0.451C0.453,-0.475 0.427,-0.494 0.396,-0.508C0.365,-0.522 0.328,-0.529 0.287,-0.529C0.246,-0.529 0.21,-0.522 0.179,-0.508C0.148,-0.494 0.121,-0.475 0.1,-0.451C0.079,-0.426 0.063,-0.398 0.052,-0.365C0.041,-0.331 0.036,-0.296 0.036,-0.258Z" style="fill:rgb(47,47,47);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(208.011,0,0,208.011,659.145,311.793)">
              <path d="M0.067,-0.714L0.067,-0L0.152,-0L0.152,-0.069L0.154,-0.069C0.163,-0.054 0.175,-0.041 0.189,-0.031C0.202,-0.02 0.217,-0.012 0.232,-0.006C0.247,0 0.263,0.004 0.279,0.007C0.294,0.01 0.308,0.011 0.321,0.011C0.36,0.011 0.395,0.004 0.425,-0.01C0.454,-0.024 0.479,-0.043 0.499,-0.068C0.518,-0.092 0.533,-0.12 0.543,-0.153C0.552,-0.186 0.557,-0.22 0.557,-0.257C0.557,-0.294 0.552,-0.328 0.542,-0.361C0.532,-0.394 0.517,-0.423 0.498,-0.448C0.478,-0.472 0.453,-0.492 0.424,-0.507C0.394,-0.522 0.359,-0.529 0.319,-0.529C0.283,-0.529 0.25,-0.523 0.22,-0.51C0.19,-0.497 0.168,-0.476 0.154,-0.447L0.152,-0.447L0.152,-0.714L0.067,-0.714ZM0.467,-0.263C0.467,-0.238 0.464,-0.213 0.459,-0.189C0.454,-0.165 0.445,-0.144 0.433,-0.125C0.421,-0.106 0.405,-0.091 0.386,-0.08C0.366,-0.069 0.341,-0.063 0.312,-0.063C0.283,-0.063 0.258,-0.069 0.237,-0.08C0.216,-0.091 0.2,-0.105 0.187,-0.123C0.173,-0.141 0.164,-0.162 0.158,-0.186C0.152,-0.209 0.149,-0.234 0.149,-0.259C0.149,-0.283 0.152,-0.307 0.158,-0.33C0.163,-0.353 0.172,-0.374 0.185,-0.393C0.198,-0.411 0.214,-0.426 0.234,-0.437C0.254,-0.448 0.278,-0.454 0.307,-0.454C0.334,-0.454 0.358,-0.449 0.379,-0.438C0.399,-0.427 0.416,-0.413 0.429,-0.395C0.442,-0.377 0.451,-0.357 0.458,-0.334C0.464,-0.311 0.467,-0.287 0.467,-0.263Z" style="fill:rgb(47,47,47);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(208.011,0,0,208.011,782.495,311.793)">
              <path d="M0.267,0.069C0.257,0.094 0.247,0.116 0.238,0.133C0.228,0.15 0.217,0.165 0.206,0.176C0.194,0.187 0.181,0.195 0.167,0.2C0.152,0.205 0.136,0.207 0.117,0.207C0.107,0.207 0.097,0.206 0.087,0.205C0.077,0.204 0.067,0.201 0.058,0.198L0.058,0.12C0.065,0.123 0.074,0.126 0.084,0.129C0.093,0.131 0.101,0.132 0.108,0.132C0.125,0.132 0.14,0.128 0.152,0.12C0.163,0.111 0.172,0.099 0.178,0.084L0.213,-0.003L0.008,-0.517L0.104,-0.517L0.255,-0.094L0.257,-0.094L0.402,-0.517L0.492,-0.517L0.267,0.069Z" style="fill:rgb(47,47,47);fill-rule:nonzero;"/>
            </g>
          </g>
          <g id="Hand" transform="matrix(0.387813,0,0,0.387813,200.537,158.738)">
            <g transform="matrix(24.6175,0,0,24.6175,68.6776,33.6107)">
              <path d="M26.992,19.016C26.737,18.761 26.439,18.546 26.117,18.38L25.717,17.024L17.705,16.968L17.398,18.059C16.931,18.154 16.357,18.448 16.005,18.777L12.394,14.823C11.577,15.187 11.005,16.003 11.005,16.956L11.005,17.916L7.005,22.082L7.021,24.27L17.005,34.999C17.005,34.999 27.523,19.711 27.548,19.741C27.421,19.517 27.037,19.038 26.992,19.016Z" style="fill:rgb(235,125,40);fill-rule:nonzero;"/>
            </g>
            <path d="M291.761,649.048C316.97,649.048 339.15,636.099 352.074,616.504C355.102,621.009 358.745,625.021 362.684,628.738C391.856,656.187 437.374,654.439 465.265,626.621C469.007,622.88 472.724,619.113 475.58,614.608L475.506,614.534C480.454,617.365 487.175,624.43 511.792,624.43L574.247,624.43C565.138,631.299 556.818,639.767 549.039,649.048C518.808,685.162 499.484,737.819 499.484,796.753C499.484,803.547 504.998,809.062 511.792,809.062C518.587,809.062 524.101,803.547 524.101,796.753C524.101,734.027 547.635,679.204 582.617,649.048C600.637,633.514 621.611,624.43 644.111,624.43C661.664,626.375 664.962,599.813 647.189,599.813L511.792,599.813C484.615,599.813 462.557,577.756 462.557,550.578C462.557,523.4 484.615,501.343 511.792,501.343L708.732,501.343C729.854,501.343 749.597,516.015 755.826,536.177L782.585,624.43C785.12,632.677 794.377,670.49 792.703,678.367C792.703,796.753 677.099,919.84 536.41,919.84C375.485,919.84 244.84,791.066 241.345,630.979L241.689,631.225C254.367,642.18 270.639,649.048 288.709,649.048L291.761,649.048ZM288.167,427.49L292.303,427.49C318.373,427.49 339.47,448.612 339.47,474.682L339.47,577.239C339.47,603.309 318.373,624.43 292.303,624.43L288.167,624.43C262.097,624.43 241,603.309 241,577.239L241,474.682C241,448.612 262.097,427.49 288.167,427.49ZM458.471,500.358L457.092,501.885C445.424,514.907 437.94,531.696 437.94,550.578C437.94,552.129 438.26,553.606 438.383,555.132C439.466,571.823 445.965,586.938 456.305,598.804C454.557,601.979 452.292,604.786 449.929,607.494C440.919,617.759 428.019,624.43 413.322,624.43C386.145,624.43 364.087,602.373 364.087,575.195L364.087,427.49C364.087,416.634 367.706,406.689 373.664,398.54C382.624,386.305 396.976,378.256 413.322,378.256C440.5,378.256 462.557,400.313 462.557,427.49L462.557,495.878C461.056,497.232 459.874,498.906 458.471,500.358ZM673.8,476.725L511.792,476.725C506.672,476.725 501.675,477.242 496.85,478.227L495.052,471.383L414.479,164.551C414.479,164.551 404.239,116.375 452.39,106.158C500.542,95.918 510.783,144.069 510.783,144.069L587.023,428.869C598.003,429.46 608.638,430.42 619.149,431.503L669.886,172.724C669.886,172.724 674.514,123.711 723.552,128.314C772.565,132.942 767.937,181.956 767.937,181.956L717.102,456.711L711.662,486.105C700.239,480.32 687.487,476.725 673.8,476.725Z" style="fill:rgb(255,203,61);fill-rule:nonzero;"/>
          </g>
        </svg>
      </section>

      <div class="mt-4 flex-center flex-col py-4">
        <Switch when={route}>
          <Switch.Case when={"/"}>
            <h1 class="text-2xl">
              Home Page
            </h1>
          </Switch.Case>
          <Switch.Case when={"/playground"}>
            <h1 class="text-2xl">
              Playground Page
            </h1>
          </Switch.Case>
        </Switch>
        <section class="mt-8"> 
          <button class="py-2 px-4 rounded-lg shadow-lg text-center text-white text-lg font-normal bg-emerald-700 hover:focus:(ring-4 ring-emerald-400) transition-all"
            style="border: none" onClick={() => route() === "/" ? route("/playground") : route("/")}>
              Route to {() => route() === "/" ? "/playground" : "/"}
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
