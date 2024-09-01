import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Profile } from "src/profile/profile.type";
import {Member} from 'src/member/member.type'

@ObjectType()
export class Channel {
    @Field()
    id: number

    @Field({ nullable: true })
    name: string

    @Field(() => ChannelType)
    type: ChannelType

    @Field()
    createdAt: string

    @Field()
    updatedAt: string

    @Field(() => [Member], { nullable: true })
    members: Member[]
}

export enum ChannelType {
    TEXT = "TEXT",
    AUDIO = "AUDIO",
    VIDEO = "VIDEO"
}

registerEnumType(ChannelType, { name: 'ChannelType', description: 'Define the type of channel' })

@ObjectType()
export class Server {
    @Field()
    id: number

    @Field()
    name: string

    @Field()
    imageUrl: string

    @Field({ nullable: true })
    inviteCode: string

    @Field()
    profileId: number
    
    @Field()
    createdAt: string

    //tham chieu toi thang khac va co chuc nang thong bao loi
    @Field(() => Profile, { nullable: true })
    profile: Profile

    @Field(() => [Member], { nullable: "itemsAndList" })
    members: Member[]

    @Field(() => [Channel], { nullable: "itemsAndList" })
    channels: Channel[]

}