// MaxRecordAge specifies the maximum time that any node will hold onto a record
// from the time its received. This does not apply to any other forms of validity that
// the record may contain.
// For example, a record may contain an ipns entry with an EOL saying its valid
// until the year 2020 (a great time in the future). For that record to stick around
// it must be rebroadcasted more frequently than once every 'MaxRecordAge'

import { KEEP_ALIVE } from '@libp2p/interface'

export const second = 1000
export const minute = 60 * second
export const hour = 60 * minute

export const MAX_RECORD_AGE = 36 * hour

export const PROTOCOL = '/ipfs/kad/1.0.0'

export const PROVIDERS_VALIDITY = 24 * hour

export const PROVIDERS_CLEANUP_INTERVAL = hour

// Re-run the provide operation when the expiry of our provider records is within this amount
export const REPROVIDE_THRESHOLD = 2 * hour

// How many reprovide operations to run at once
export const REPROVIDE_CONCURRENCY = 10

// How long to let the reprovide queue grow before we wait for capacity
export const REPROVIDE_MAX_QUEUE_SIZE = 16_384

// How often to check if records need reproviding
export const REPROVIDE_INTERVAL = hour

export const READ_MESSAGE_TIMEOUT = 10 * second

// The number of records that will be retrieved on a call to getMany()
export const GET_MANY_RECORD_COUNT = 16

// K is the maximum number of requests to perform before returning failure
export const K = 20

// Alpha is the concurrency for asynchronous requests
export const ALPHA = 3

// How often we look for our closest DHT neighbours
export const QUERY_SELF_INTERVAL = 5 * minute

// How often we look for the first set of our closest DHT neighbours
export const QUERY_SELF_INITIAL_INTERVAL = second

// How long to look for our closest DHT neighbours for
export const QUERY_SELF_TIMEOUT = 5 * second

// How often we try to find new peers
export const TABLE_REFRESH_INTERVAL = 5 * minute

// How how long to look for new peers for
export const TABLE_REFRESH_QUERY_TIMEOUT = 30 * second

// When a timeout is not specified, run a query for this long
export const DEFAULT_QUERY_TIMEOUT = 180 * second

// used to ensure connections to our closest peers remain open
export const KEEP_ALIVE_TAG = `${KEEP_ALIVE}-kad-dht`
