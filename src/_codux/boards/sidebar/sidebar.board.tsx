import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/sidebar/sidebar';

export default createBoard({
    name: 'Sidebar',
    Board: () => <Sidebar />,
    environmentProps: {
        windowWidth: 1198,
        windowHeight: 785,
        canvasWidth: 416,
    },
});
