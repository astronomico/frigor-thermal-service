import { IUser } from '@/types/user.types'
import { Document, Model, Schema, model } from 'mongoose'

const UserSchema = new Schema<IUser>({
  firstname: { type: String, required: true },
  avatar: { type: String, required: true },
  preferences: { type: Schema.Types.ObjectId, ref: 'Settings' },
  username: { type: String },
  lastname: { type: String }
})

UserSchema.methods.fullName = function speak(this: IUser) {
  const full = this.firstname ? 'TEST ' + this.lastname : 'TEST1'
  console.log(full)
}

export interface IUserDocument extends IUser, Document {}
export type IUserModel = Model<IUserDocument>

export const UserModel = model<IUserDocument>('employee', UserSchema)
