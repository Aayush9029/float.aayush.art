import { Section } from "@/components/common/layout";

export default function PrivacyPage() {
  return (
    <Section>
      <Section contained gutterY>
        <h1>Our Privacy Policy</h1>
      </Section>

      <Section>
        <h2>Introduction and Overview</h2>
        <p>
          This Privacy Policy outlines our commitment to protecting the privacy
          and security of the users of our application (hereinafter referred to
          as "Float"). We understand the importance of privacy and have designed
          Float with your right to privacy as a fundamental consideration. This
          document explains how we handle and treat your data and your rights in
          relation to that data.
        </p>
      </Section>

      <Section>
        <h2>Your Data in Float</h2>
        <p>
          As a user of Float, you retain complete control over your data. We
          have no access to any of your data stored or processed by Float on
          your device. Our philosophy is to ensure that your data remains
          strictly within your device, and we do not, under any circumstances,
          collect, store, or transmit personal data through Float.
        </p>
      </Section>

      <Section>
        <h2>Data Security</h2>
        <p>
          Ensuring the security of your data within Float is a top priority. We
          employ advanced security measures to prevent unauthorized access,
          disclosure, alteration, or destruction of the data stored on your
          device. Our approach to data security is proactive and vigilant,
          safeguarding your information against emerging security threats.
        </p>
      </Section>

      <Section>
        <h2>Analytics and Usage Data</h2>
        <p>
          Float, in its default configuration, does not explicitly collect,
          store, or use any analytics or usage information. Our commitment to
          your privacy extends to abstaining from tracking your usage patterns,
          preferences, or behavior within Float. However, we may collect
          optional telemetry data, such as crash logs, to enhance the
          functionality and stability of Float. This collection is entirely
          optional and can be enabled or disabled based on your preference.
        </p>
      </Section>

      <Section>
        <h2>Apple’s Analytics Information</h2>
        <p>
          Please note that depending on your device’s privacy settings, Apple
          Inc. may collect and share analytics information, such as crash logs
          and battery usage data. This is a standard practice for apps
          distributed through Apple's platforms and is subject to Apple's
          privacy policies and procedures.
        </p>
      </Section>

      <Section>
        <h2>Changes to Our Privacy Policy</h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time. Any
          changes will be effective immediately upon posting the revised policy.
          We encourage you to periodically review this page for the latest
          information on our privacy practices.
        </p>
        <br />
      </Section>
    </Section>
  );
}
