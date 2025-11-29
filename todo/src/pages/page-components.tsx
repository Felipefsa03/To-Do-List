import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import Icon from "../components/icon";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
// import React from "react";
import Checkbox from "../components/input-checkbox";
import Card from "../components/card";
import Conteiner from "../components/container";
import Skeleton from "../components/skeleton";

export default function PageComponents(){
    return (
    <>
    <Conteiner>
      <Text as="div" variant="body-sm-bold" className="text-pink-dark"> Helo world</Text>


      <div  >
        <Text variant="body-md-bold">Importacao de SVG como componente React</Text>
        <TrashIcon />
        <CheckIcon />
        <PencilIcon />
        <SpinnerIcon />
        <XIcon />
      </div>  
      <div>
        <Text variant="body-md-bold">Componentizacao</Text>
        <div>
        <Icon svg={PlusIcon} className="fill-pink-base"/>
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} />
        </div>
        <Text>Outro teste</Text>
        <div>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
        </div>
      </div>

      <div>
        <Text>Outro teste 2</Text>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant="primary"/>
        <ButtonIcon icon={TrashIcon} variant="secondary"/>
        <ButtonIcon icon={TrashIcon} variant="tertiary"/>
        <ButtonIcon icon={TrashIcon} loading/>
      </div>
      <div className="flex gap-1">
        <Text>Testano o input</Text>
        <InputText/>
      </div>
      <div className="flex gap-1">
        <Text>Testano o checkbox ll</Text>
        <Checkbox loading />
      </div>
      <div className="flex gap-1">
        <Text>Testano o checkbox desabilitado</Text>
        <Checkbox disabled/>
      </div>
      <div className="flex gap-1">
        <Text>Testando o Card</Text>
        <Card size="md">
          Hello world
          <Text>Conteudo do card</Text>
        </Card>
      </div>
    </Conteiner>
    <div className="flex gap-1">
      <Text>Testando o Skeleton</Text>
      <Card size="md">
        <Text>Conteudo do card com skeleton</Text>
        <Skeleton className="h-4 w-full mb-2"/>
        <Skeleton className="h-4 w-3/4 mb-2"/>
        <Skeleton className="h-4 w-1/2"/>
      </Card>
    </div>

    <div className="fles  gap-1">
     <Text>Badge com skeleton</Text>
      <Badge size="sm" loading />
    </div>

    </>
  )
}