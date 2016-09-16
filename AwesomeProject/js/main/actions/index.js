import countActions from '../../components/counter/actions/counterActions';
import musicActions from '../../components/music/actions/musicActions';
import splashActions from './splashActions';

module.exports = {
    ...countActions,
    ...musicActions,
    ...splashActions
};