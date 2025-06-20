
const getPredictedAge=async(name:string)=>{
    const res=await fetch("https://api.agify.io?name=${name}");
    return res.json();


};
const getPredictedGender=async(name:string)=>{
    const res=await fetch(" https://api.genderize.io?name=${name}");
    return res.json();
}
const getPredictedcountry=async(name:string)=>{
    const res=await fetch("https://api.nationalize.io/?name=${name}");
    return res.json()

}
interface params{
    params:{
        name:string;
    }
}

export default async function page({params}:params){
    const agedata=getPredictedAge(params.name);
    const genderdata=getPredictedGender(params.name)
    const countrydata=getPredictedcountry(params.name);

    const [age,gender,country]= await Promise.all([
        agedata,
        genderdata,
        countrydata
    ])
    return(
 <div style={{
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif' 
    }}>
      <div>
        <div style={{
          fontSize: '1.5em',
          color: '#333',
          marginBottom: '10px',
          borderBottom: '2px solid #007bff',
          paddingBottom: '5px'
        }}>
          personal info
        </div>
        <div style={{
          fontSize: '1.1em',
          marginBottom: '8px',
          color: '#555'
        }}>
          Age: <span style={{ fontWeight: 'bold', color: '#000' }}>{age?.age}</span>
        </div>
        <div style={{
          fontSize: '1.1em',
          marginBottom: '8px',
          color: '#555'
        }}>
          Gender: <span style={{ fontWeight: 'bold', color: '#000' }}>{gender?.gender}</span>
        </div>
        <div style={{
          fontSize: '1.1em',
          color: '#555' 
        }}>
          Country: <span style={{ fontWeight: 'bold', color: '#000' }}>{country?.[0]?.country_id}</span>
        </div>
      </div>
    </div>
  );
};

