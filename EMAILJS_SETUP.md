# EmailJS Setup — 5 minutes, free

## Step 1 — Create account
Go to https://www.emailjs.com and sign up free.
Free plan = 200 emails/month, no credit card.

## Step 2 — Add Gmail service
1. Dashboard → Email Services → Add New Service
2. Choose **Gmail**
3. Click **Connect Account** → sign in with akibbhuiyan3544@gmail.com
4. Copy the **Service ID** (looks like `service_abc1234`)

## Step 3 — Create email template
1. Dashboard → Email Templates → Create New Template
2. Set **To Email** field to: `akibbhuiyan3544@gmail.com`
3. Set **Subject** to: `New inquiry from {{from_name}} — {{platform}}`
4. Set **Content** (HTML or text):

```
Name:     {{from_name}}
Email:    {{from_email}}
Company:  {{company}}
Phone:    {{phone}}
Platform: {{platform}}
Budget:   {{budget}}
Timeline: {{timeline}}
Source:   {{source}}

Message:
{{message}}
```

5. Save → copy the **Template ID** (looks like `template_xyz5678`)

## Step 4 — Get API keys
1. Dashboard → Account → API Keys
2. Copy **Public Key**
3. Copy **Private Key** (needed for server-side calls)

## Step 5 — Fill in .env.local
Open `.env.local` and replace the placeholder values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
```

## Step 6 — Restart dev server
```
npm run dev
```

That's it. Test the form — you'll receive the email at akibbhuiyan3544@gmail.com.
