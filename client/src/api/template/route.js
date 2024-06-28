import { client } from "@/postmark";

export async function POST(request){
    const res = await request.json();
    const {name,text} = res;
    
    client.sendEmailWithTemplate({
        "TemplateId": '36427943',
        "From": 'astha.singh_cs21@gla.ac.in',
        "To": 'astha.singh_cs21@gla.ac.in',
        "TemplateModel": {
            "name": name,
            "Text": text
        }
    })

    return Response.json({res})
}