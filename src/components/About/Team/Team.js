import React from "react";
import styled from "styled-components";
import { breakpoint, theme } from "@aragon/ui";
import { Section, IllustratedSection } from "@aragon/web";
import drawing0 from "./assets/aragon_one_logo.png";
import drawing1 from "./assets/aragon_dac_logo_horizontal_transbg_mid.png";


import SectionTitle from "../../SectionTitle";
import Member from "./Member";

const medium = css => breakpoint("medium", css);
const large = css => breakpoint("large", css);
const { Title, Emphasis } = IllustratedSection;

const CoreSection = styled(Section, IllustratedSection)`
	padding: 50px 0;
	background: ${theme.mainBackground};

	.columns {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		margin: 50px 0;
	}

	.aone_img {
		text-align: center;
		margin: 50px 0;
	}

	.aone_img img {
		max-width: 45%;
	}

	.adac_img {
		text-align: center;
		margin: 50px 0;
	}

	.adac_img img {
		max-width: 45%;
	}

	h1 {
		text-align: center;
	}

	${medium(`
    padding: 120px 0;
  `)};
`;

const StyledMember = styled(Member)`
	width: 50%;
	${medium(`
    width: 33%;
  `)};
	${large(`
    width: 25%;
  `)};
`;

const Core = () => (
	<CoreSection>
		<div className="aone">
			<Title>
				<h1>Aragon One Team</h1>
			</Title>
			<Emphasis>
				<p>
					<a href="http://blog.aragon.one/introducing-aragon-one-b14dd804c5ce/">Aragon One</a> is one of the development teams working on Aragon. <a href="https://aragon.one/">Aragon
					One</a> is a for-profit company that encompasses the foundational team
					working on the Aragon Project. The company is currently established in
					Switzerland, although we want it to function as a DAO as much as
					possible
				</p>
			</Emphasis>
			<div className="aone_img">
				<img className="item" src={drawing0} alt="" />
			</div>
			<div className="columns">
				<StyledMember
					picture="Luis.png"
					name="Luis Cuende"
					title="CEO at Aragon One"
					twitter="licuende"
					medium="lic"
					github="luisivan"
				/>
				<StyledMember
					picture="Jorge.png"
					name="Jorge Izquierdo"
					title="CTO at Aragon One"
					twitter="izqui9"
					medium="izqui9"
					github="izqui"
				/>
				<StyledMember
					picture="Maria.png"
					name="Maria Gomez"
					title="Strategy & Operations"
					twitter="MyPaoG"
					medium="MyPaoG"
					github="mariapao"
				/>
				<StyledMember
					picture="Tatu.png"
					name="Tatu Kärki"
					title="Communications at Aragon One"
					twitter="Smokyish"
					medium="Smokyish"
					github="Smokyish"
				/>
				<StyledMember
					picture="Luke.png"
					name="Luke Duncan"
					title="Research at Aragon One"
					twitter="lkngtn"
					medium="lkngtn"
					github="lkngtn"
				/>
				<StyledMember
					picture="Pierre.png"
					name="Pierre Bertet"
					title="UI & Interaction Developer"
					twitter="bpierre"
					medium="bpierre"
					github="bpierre"
				/>
				<StyledMember
					picture="Brett.png"
					name="Brett Sun"
					title="Lead Developer at Aragon One"
					twitter="sohkai"
					medium="sohkai"
					github="sohkai"
				/>
				<StyledMember
					picture="John.png"
					name="John Light"
					title="Community at Aragon One"
					twitter="lightcoin"
					medium="lightcoin"
					github="john-light"
				/>
				<StyledMember
					picture="Alexa.png"
					name="Alexa Weaver"
					title="Operations Assistant"
					twitter="alexa_rwr"
					medium="Alexa_RWR"
					github="alexarwr"
				/>
				<StyledMember
					picture="Jouni.png"
					name="Jouni Helminen"
					title="Design at Aragon One"
					twitter="dharmaone"
					medium="dharmaone"
					github="jounih"
				/>
				<StyledMember
					picture="Bingen.png"
					name="Bingen Eguzkitza"
					title="Solidity Engineer"
					twitter="bingentxu"
					medium="bingentxu"
					github="bingen"
				/>
				<StyledMember
					picture="Chris.png"
					name="Chris Remus"
					title="Product Manager"
					twitter="cjremus"
					github="chris-remus"
				/>
			</div>
		</div>
		<div className="adac">
			<Title>
				<h1>Aragon DAC</h1>
			</Title>
			<Emphasis>
				<p>
					The Aragon Foundation and <a href="https://giveth.io/">Giveth</a> are proud to announce the launch of Aragon DAC, a <a href="ttps://medium.com/giveth/giveth-introduces-decentralized-altruistic-communities-dacs-d1155a79bdc4">Decentralized Altruistic Community</a> on the Giveth platform that will work on building out core Aragon infrastructure from the end user's perspective.
				</p>
			</Emphasis>
			<div className="adac_img">
				<img className="item" src={drawing1} alt="" />
			</div>
			<div className="columns">
				<StyledMember
					picture="aradac_square.png"
					name="Griff Green"
					title="Governance Circle Lead at Giveth"
					twitter="thegrifft"
					medium="thegrifft"
					github="griffgreen"
				/>
				<StyledMember
					picture="aradac_square.png"
					name="Quazia"
					title="Social Coding Circle Lead at Giveth"
					twitter="LollLunn"
					medium="quazia_73523"
					github="quazia"
				/>
				<StyledMember
					picture="aradac_square.png"
					name="Kris Decoodt"
					title="Communication Circle Lead at Giveth"
					twitter="krrisis"
					medium="krrisis"
					github="krrisis"
				/>
			</div>
		</div>
	</CoreSection>
);

const AdvisorsSection = styled(Section)`
	padding: 50px 0;
	background: white;

	.columns {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		margin: 50px 0;
	}

	${medium(`
    padding: 120px 0;
  `)};
`;

const Advisors = () => (
	<AdvisorsSection>
		<div className="advisors">
			<SectionTitle title="Advisors" />
			<div className="columns">
				<StyledMember
					picture="Mihai.jpg"
					name="Mihai Alisie"
					title="Ethereum cofounder and AKASHA founder"
					twitter="mihaialisie"
				/>
				<StyledMember
					picture="Jake.jpg"
					name="Jake Brukhman"
					title="Cofounder at CoinFund"
					twitter="jbrukh"
				/>
				<StyledMember
					picture="Kenny.jpg"
					name="Kenny Rowe"
					title="COO of Dai Foundation"
					twitter="kennyrowe"
				/>
				<StyledMember
					picture="Brayton.jpg"
					name="Brayton Williams"
					title="Founding Partner at Boost VC"
					twitter="BraytonKey"
				/>
			</div>
		</div>
	</AdvisorsSection>
);

const Team = () => (
	<div>
		<Core />
		<Advisors />
	</div>
);

export default Team;
