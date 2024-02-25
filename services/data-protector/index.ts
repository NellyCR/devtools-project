import { DataObject, IExecDataProtector } from "@iexec/dataprotector"

export async function protectData(walletProvider: any, data: DataObject) {
    const dataProtector = new IExecDataProtector(walletProvider)
    const protectedData = await dataProtector.protectData({ data })
    return protectedData

}

// Uses collected email and wallet provider to protect email using IExecDataProtector
export async function protectEmail(walletProvider: any, email: string) {
  const dataProtector = new IExecDataProtector(walletProvider)
  const protectedEmail = await dataProtector.protectData({data: { email }})
  return protectedEmail
}