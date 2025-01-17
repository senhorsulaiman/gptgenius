import { fetchOrgenerateUserTokens} from '../../utils/action';
import {  auth, currentUser,UserButton } from '@clerk/nextjs'


const MemberProfile = async() => {

    const user =await currentUser();
  const {userId}=auth();
  await fetchOrgenerateUserTokens(userId);
//     console.log('userid' +' '+ userId)
  return (
    <div className='px-4 flex items-center gap-2'>
        <UserButton  afterSignOutUrl='/'/>
        <p>{user?.emailAddresses[0].emailAddress}</p>
    </div>


  )
}

export default MemberProfile