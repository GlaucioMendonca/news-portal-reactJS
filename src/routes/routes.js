import Tecnology from "../views/pages/tecnology/index";
import Healt from "../views/pages/healt";
import Sports from "../views/pages/sports";
import Latest from "../views/pages/latest";

export default [
  {
    path: "/",
    component: Latest,
    role: "anonymous",
    type: "public"
  },
  {
    path: '/tecnology',
    component: Tecnology,
    rule: 'anonymous',
    type: 'public'
  },
  {
    path: '/sports',
    component: Sports,
    rule: 'anonymous',
    type: 'public'
  },
  {
    path: '/healt',
    component: Healt,
    rule: 'anonymous',
    type: 'public'
  }
];
