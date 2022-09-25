export const MDX_REG_EXP = /\.mdx?$/

export const isMDX = (path: string) => MDX_REG_EXP.test(path)
