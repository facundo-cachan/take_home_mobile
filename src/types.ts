export enum AllowedNotification {
  success,
  error,
  warning,
  info
}
export type Notification = {
  type: keyof typeof AllowedNotification
  message: string
}
export type ABM = {
  isActive?: boolean
  created_date?: string
  updated_date?: string
  deleted_date?: string
}
