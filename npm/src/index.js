import { UUID } from 'uuidv7'

/**
 * A module re-export of uuidv7
 * @exports uuidv7
 */
export * from 'uuidv7'

/**
 * extract timestamp from UUID v7
 *
 * @param {String} uuid - ApolloServer or Express Request for check
 * @return {Date} extracted timestamp
 */
export function getDate(uuid) {
  const timestampBytes = new Uint8Array(8)
  timestampBytes.set(new Uint8Array(UUID.parse(uuid).bytes.buffer.slice(0, 6)), 2)
  const timestampMs = new DataView(timestampBytes.buffer).getBigUint64(0)

  return new Date(Number(timestampMs))
}
