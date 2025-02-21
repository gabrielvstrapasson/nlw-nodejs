import { redis } from '../redis/client'

interface getSubscriberInviteClicksParam {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: getSubscriberInviteClicksParam) {
  const count = await redis.hget('referral:acess-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
