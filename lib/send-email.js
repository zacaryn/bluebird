import nodemailer from 'nodemailer';

// Simple function to send David an email about new leads
export async function sendLeadEmail(leadData) {
    try {
        // Gmail setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // bluebird.mail.server@gmail.com
                pass: process.env.GMAIL_APP_PASSWORD // Your app password
            }
        });

        // Email content with professional styling
        const emailHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
                <div style="background-color: #1e74a0; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">🏠 BluebirdMortgage.com</h1>
                    <h2 style="margin: 10px 0 0 0; font-size: 18px; font-weight: normal;">New Lead Notification</h2>
                </div>
                
                <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="background-color: #e8f4f8; padding: 15px; border-radius: 6px; margin-bottom: 25px;">
                        <h3 style="margin: 0 0 10px 0; color: #1e74a0; font-size: 16px;">📋 Lead Source: ${leadData.source}</h3>
                        <p style="margin: 0; color: #666; font-size: 14px;">Submitted: ${new Date().toLocaleString('en-US', { 
                            timeZone: 'America/Denver',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })} MT</p>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #1e74a0; margin: 0 0 15px 0; font-size: 16px;">👤 Contact Information</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 100px;">Name:</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">${leadData.name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email:</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${leadData.email}" style="color: #1e74a0; text-decoration: none;">${leadData.email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
                                <td style="padding: 8px 0;"><a href="tel:${leadData.phone}" style="color: #1e74a0; text-decoration: none;">${leadData.phone}</a></td>
                            </tr>
                        </table>
                    </div>
                    
                    ${leadData.message ? `
                        <div style="margin-bottom: 25px;">
                            <h3 style="color: #1e74a0; margin: 0 0 15px 0; font-size: 16px;">💬 ${leadData.source === 'Get Started Form' ? 'Loan Details' : 'Message'}</h3>
                            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #1e74a0;">
                                <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-line;">${leadData.message}</p>
                            </div>
                        </div>
                    ` : ''}
                    
                    <div style="background-color: #e8f4f8; padding: 20px; border-radius: 6px; text-align: center;">
                        <p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">Quick Actions:</p>
                        <a href="tel:${leadData.phone}" style="display: inline-block; background-color: #1e74a0; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 0 10px; font-size: 14px;">📞 Call Now</a>
                        <a href="mailto:${leadData.email}" style="display: inline-block; background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 0 10px; font-size: 14px;">✉️ Reply</a>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>BluebirdMortgage.com Lead Management System</p>
                </div>
            </div>
        `;

        // Send email
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: 'david@bluebirdmortgage.com',
            cc: 'bluebird.mail.server@gmail.com', // Add CC recipients
            // bcc: 'another@email.com', // Add BCC recipients (hidden from others)
            subject: `🏠 BluebirdMortgage.com - New Lead: ${leadData.name} (${leadData.source})`,
            html: emailHTML
        });

        console.log('Lead email sent to David');
        return true;

    } catch (error) {
        console.error('Email failed:', error);
        return false;
    }
} 