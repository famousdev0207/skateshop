import { Button } from "@react-email/button"
import { Html } from "@react-email/html"
import { Tailwind } from "@react-email/tailwind"

export default function NewsletterWelcomeEmail() {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <Button
          href="https://example.com"
          className="bg-primary px-3 py-2 font-medium leading-4 text-primary"
        >
          Click me
        </Button>
      </Tailwind>
    </Html>
  )
}