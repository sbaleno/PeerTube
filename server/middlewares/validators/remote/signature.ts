import 'express-validator'
import * as express from 'express'

import { logger } from '../../../helpers'
import { checkErrors } from '../utils'

function signatureValidator (req: express.Request, res: express.Response, next: express.NextFunction) {
  req.checkBody('signature.host', 'Should have a signature host').isURL()
  req.checkBody('signature.signature', 'Should have a signature').notEmpty()

  logger.debug('Checking signature parameters', { parameters: { signature: req.body.signature } })

  checkErrors(req, res, next)
}

// ---------------------------------------------------------------------------

export {
  signatureValidator
}
