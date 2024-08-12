'use client'

import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"

type Props = {}
export default function Header({ }: Props) {
    const { user } = useUser()
    return (
        <div className="flex items-center justify-between p-6">
            {
                user && (
                    <h1 className="text-2xl">
                        {user?.firstName}
                        {`'s`} Space
                    </h1>
                )
            }
            {/* BreadCrumbs */}

            <div>
                <SignedOut>
                    <SignInButton />


                </SignedOut>
                <SignedIn>
                    <UserButton />

                </SignedIn>
            </div>

        </div>
    )
}