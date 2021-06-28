
import app from './index';

const port = process.env.SERVER_PORT

// start the express server
app.listen(port || process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})