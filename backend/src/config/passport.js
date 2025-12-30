import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import Vendor from "../models/Vendor.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        let vendor = await Vendor.findOne({ email });
        if (!vendor) {
          vendor = await Vendor.create({
            name: profile.displayName,
            email,
            googleId: profile.id,
            role: "vendor"
          });
        }

        done(null, vendor);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

export default passport;
