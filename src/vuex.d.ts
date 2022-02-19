import { Store } from "vuex";
import VuexState from "./interfaces/VuexState";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<VuexState>;
  }
}
