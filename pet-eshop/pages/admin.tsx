import Layout from "../components/layout"

export default function Page() {
  return (
    <Layout>
      <h1>This page is protected by Middleware</h1>
      <p>Only admin users can see this page.</p>
      <p>
        To learn more about the NextAuth middleware see&nbsp;
        <a href="https://docs-git-misc-docs-nextauthjs.vercel.app/configuration/nextjs#middleware">
          the docs
        </a>
        .
      </p>
      <Box width='lg' display='flex'>
            <Typography variant='h3'>{title}</Typography>
            <Image src={image} height={500} width={800}></Image>
            <Typography variant='h4' sx={{my:3}}>Описание</Typography>
            <Typography variant='h5' sx={{}}>{description}</Typography>
        </Box>
    </Layout>
  )
}
