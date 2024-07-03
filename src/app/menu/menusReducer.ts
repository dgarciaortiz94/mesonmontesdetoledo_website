export function MenusReducer(state: any, action: any) {
    switch (action.type) {
        case 'read_menus':
            return {
                ...state,
                menus: action.payload,
            };

        case 'move_menu':
            return {
                ...state,
                menus: action.payload,
            };

        case 'create_menu':
            console.log(action.payload);
            let menus = {...state}.menus;
            menus.push(action.payload);

            console.log(menus)

            return {
                ...state,
                menus: menus,
            };
        default:
            throw new Error('Unknown action: ' + action.type);
    }
}
