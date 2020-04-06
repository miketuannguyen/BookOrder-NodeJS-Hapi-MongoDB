import debug from 'debug'

const log = (message, ...opt) => {
  if (opt.length > 0) {
    process.env.DEBUG = message
    const stdout = debug(message)
    debug.enable(process.env.DEBUG);
    // eslint-disable-next-line no-console
    stdout.log = console.log.bind(console)
    stdout(...opt)
  }
  else {
    debug.log(message, ...opt)
  }
}

const error = (message, ...opt) => {
  if (opt.length > 1) {
    process.env.DEBUG = message
    const stderr = debug(message)
    debug.enable(process.env.DEBUG);
    stderr(...opt)
  }
  else {
    // eslint-disable-next-line no-console
    console.error(message, ...opt)
  }
}

export default {
  log, error
}
