import {PageReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
import {Page} from "./views/page";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }
}