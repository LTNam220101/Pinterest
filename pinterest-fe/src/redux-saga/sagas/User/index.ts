import followUser from "./followUser"
import unFollowUser from "./unFollowUser"
import {
  watchGetFollowings as getFollowings,
  watchGetFollowingsUser as getFollowingsUser
} from "./getFollowings"
import {
  watchGetFollowers as getFollowers,
  watchGetFollowersUser as getFollowersUser
} from "./getFollowers"
import getNoti from "./getNoti"

export {
  followUser,
  unFollowUser,
  getFollowings,
  getFollowers,
  getFollowingsUser,
  getFollowersUser,
  getNoti
}
