import { auth, UserProfile } from '@clerk/nextjs'
import React from 'react'
import { fetchUserTokensByID } from '../../../utils/action'

const ProfilePage = async () => {
    const { userId } = auth()
    const currentTokens = await fetchUserTokensByID(userId);
    return (
        <div>
            <h2 className='mb-8 text-xl font-extrabold'>

                Token Amount:{currentTokens}

            </h2>
            <UserProfile />

        </div>
    )
}

export default ProfilePage
