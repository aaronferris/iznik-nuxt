
/*    --- DO NOT EDIT --- 
 *
 * This file was generating using api/index.generate.js
 * You can regenerate it by running:
 *
 *     node api/index.generate.js
 *
 *    --- DO NOT EDIT ---
 */


import ActivityAPI from './ActivityAPI.js'
import AddressAPI from './AddressAPI.js'
import AuthorityAPI from './AuthorityAPI.js'
import ChatAPI from './ChatAPI.js'
import CommunityEventAPI from './CommunityEventAPI.js'
import DashboardAPI from './DashboardAPI.js'
import DonationsAPI from './DonationsAPI.js'
import GroupAPI from './GroupAPI.js'
import InvitationAPI from './InvitationAPI.js'
import JobAPI from './JobAPI.js'
import MembershipsAPI from './MembershipsAPI.js'
import MessageAPI from './MessageAPI.js'
import NewsAPI from './NewsAPI.js'
import NoticeboardAPI from './NoticeboardAPI.js'
import NotificationAPI from './NotificationAPI.js'
import ScheduleAPI from './ScheduleAPI.js'
import SessionAPI from './SessionAPI.js'
import StoriesAPI from './StoriesAPI.js'
import TeamAPI from './TeamAPI.js'
import UserAPI from './UserAPI.js'
import UserSearchAPI from './UserSearchAPI.js'
import VolunteeringAPI from './VolunteeringAPI.js'

interface API {
  activity: ActivityAPI;
  address: AddressAPI;
  authority: AuthorityAPI;
  chat: ChatAPI;
  communityevent: CommunityEventAPI;
  dashboard: DashboardAPI;
  donations: DonationsAPI;
  group: GroupAPI;
  invitation: InvitationAPI;
  job: JobAPI;
  memberships: MembershipsAPI;
  message: MessageAPI;
  news: NewsAPI;
  noticeboard: NoticeboardAPI;
  notification: NotificationAPI;
  schedule: ScheduleAPI;
  session: SessionAPI;
  stories: StoriesAPI;
  team: TeamAPI;
  user: UserAPI;
  usersearch: UserSearchAPI;
  volunteering: VolunteeringAPI;
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: API;
  }
}