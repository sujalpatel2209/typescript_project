import appRoute from './route';

const appRoutes = (app: any): void => {
    app.use('/api/v1/', appRoute);
}

export default appRoutes;